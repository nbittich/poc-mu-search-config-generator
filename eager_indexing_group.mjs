import fetch from 'node-fetch';

const ROLE = "LoketLB-toezichtGebruiker";
const SPEC_NAME = "o-toez-rwf";

const URL = "http://localhost:8890/sparql";

const HEADER_CONTENT_TYPE = "application/sparql-results+json";

function make_query(role) {
  return `
    PREFIX ext: <http://mu.semte.ch/vocabularies/ext/>
    PREFIX mu: <http://mu.semte.ch/vocabularies/core/>
    SELECT DISTINCT ?session_group  WHERE {
      ?sessionId ext:sessionGroup/mu:uuid ?session_group;
                   ext:sessionRole ?session_role.
      FILTER( ?session_role = "${role}" )
}
    `;
}

async function get_session_group() {
  const query = make_query(ROLE);
  const form = new URLSearchParams();
  form.append("query", query);
  form.append("format", HEADER_CONTENT_TYPE);
  const result = await fetch(URL + "?" + form.toString());
  return await result.json();
}

export default async function get_eager_index_groups() {
  const result = await get_session_group();
  const session_group = result.results.bindings.map(b=> b.session_group.value);
  const search_config= session_group.map(sg=>{
    return [
      {
        "variables": [],
        "name": "clean"
      },
      {
        "variables": [],
        "name": "public"
      },
      {
        name: SPEC_NAME,
        variables: [sg, ROLE]
      }
    ]
  });
  return search_config;
}


