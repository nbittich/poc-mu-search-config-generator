export default [
  {
    type: "form-data",
    on_path: "form-data",
    rdf_type: "http://lblod.data.gift/vocabularies/automatische-melding/FormData",
    properties: {
      date_publication: ["http://data.europa.eu/eli/ontology#date_publication"],
      financial_year: ["http://linkedeconomy.org/ontology#financialYear"],
      description: ["http://purl.org/dc/terms/description"],
      comment: ["https://www.w3.org/2000/01/rdf-schema#comment"],
      first_date_in_force: ["http://data.europa.eu/eli/ontology#first_date_entry_in_force"],
      date_no_longer_in_force: ["http://data.europa.eu/eli/ontology#date_no_longer_in_force"],
      authenticity_type : ["http://lblod.data.gift/vocabularies/besluit/authenticityType"],
      chart_of_account : ["http://lblod.data.gift/vocabularies/besluit/chartOfAccount"],
      tax_type : ["http://lblod.data.gift/vocabularies/besluit/taxType"],
      tax_rate : ["http://lblod.data.gift/vocabularies/besluit/taxRate"],
      has_additional_tax_rate : ["http://lblod.data.gift/vocabularies/besluit/hasAdditionalTaxRate"],
      link: ["http://purl.org/dc/terms/hasPart"],
      tax_rate_amount : ["http://mu.semte.ch/vocabularies/ext/taxRateAmount"],
      session_started_at_time : ["http://mu.semte.ch/vocabularies/ext/sessionStartedAtTime"],


    },
    mappings: {
      properties: {
        date_publication: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        financial_year: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        description: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        comment: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        first_date_in_force: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        date_no_longer_in_force: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        authenticity_type: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        chart_of_account: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        tax_type: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        has_additional_tax_rate: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        link: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        tax_rate_amount: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        session_started_at_time: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
      },
    },
  },
];
