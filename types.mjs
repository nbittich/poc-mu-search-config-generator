export default [
  {
    type: "unit",
    on_path: "units",
    rdf_type:
      "http://data.lblod.info/vocabularies/erediensten/EredienstBestuurseenheid",
    sub_types: [
      "http://data.lblod.info/vocabularies/erediensten/CentraalBestuurVanDeEredienst",
      "http://data.lblod.info/vocabularies/erediensten/BestuurVanDeEredienst",
    ],
    properties: {
      name: "http://www.w3.org/2004/02/skos/core#prefLabel",
      classification_id: [
        "http://www.w3.org/ns/org#classification",
        "http://mu.semte.ch/vocabularies/core/uuid",
      ],
      classification_name: [
        "http://www.w3.org/ns/org#classification",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
      ],
      status: [
        "http://www.w3.org/ns/regorg#orgStatus",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
      ],
      status_id: [
        "http://www.w3.org/ns/regorg#orgStatus",
        "http://mu.semte.ch/vocabularies/core/uuid",
      ],
      recognized_worship_type_id: [
        "http://data.lblod.info/vocabularies/erediensten/typeEredienst",
        "http://mu.semte.ch/vocabularies/core/uuid",
      ],
      recognized_worship_type_name: [
        "http://data.lblod.info/vocabularies/erediensten/typeEredienst",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
      ],
      province: [
        "http://www.w3.org/ns/org#hasPrimarySite",
        "https://data.vlaanderen.be/ns/organisatie#bestaatUit",
        "http://www.w3.org/ns/locn#adminUnitL2",
      ],
      municipality: [
        "http://www.w3.org/ns/org#hasPrimarySite",
        "https://data.vlaanderen.be/ns/organisatie#bestaatUit",
        "https://data.vlaanderen.be/ns/adres#gemeentenaam",
      ],
    },
    mappings: {
      properties: {
        classification_id: {
          type: "text",
        },
        recognized_worship_type_id: {
          type: "text",
        },
        name: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
              normalizer: "custom_sort_normalizer",
            },
          },
        },
        classification_name: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
              normalizer: "custom_sort_normalizer",
            },
          },
        },
        status: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
              normalizer: "custom_sort_normalizer",
            },
          },
        },
        recognized_worship_type_name: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
              normalizer: "custom_sort_normalizer",
            },
          },
        },
        province: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
              normalizer: "custom_sort_normalizer",
            },
          },
        },
        municipality: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
              normalizer: "custom_sort_normalizer",
            },
          },
        },
      },
    },
  },
  {
    type: "form-data",
    on_path: "form-data",
    rdf_type:
      "http://lblod.data.gift/vocabularies/automatische-melding/FormData",
    properties: {
      date_publication: ["http://data.europa.eu/eli/ontology#date_publication"],
      financial_year: ["http://linkedeconomy.org/ontology#financialYear"],
      description: ["http://purl.org/dc/terms/description"],
      comment: ["https://www.w3.org/2000/01/rdf-schema#comment"],
      first_date_in_force: [
        "http://data.europa.eu/eli/ontology#first_date_entry_in_force",
      ],
      date_no_longer_in_force: [
        "http://data.europa.eu/eli/ontology#date_no_longer_in_force",
      ],
      authenticity_type: [
        "http://lblod.data.gift/vocabularies/besluit/authenticityType",
      ],
      chart_of_account: [
        "http://lblod.data.gift/vocabularies/besluit/chartOfAccount",
      ],
      tax_type: ["http://lblod.data.gift/vocabularies/besluit/taxType"],
      tax_rate: ["http://lblod.data.gift/vocabularies/besluit/taxRate"],
      has_additional_tax_rate: [
        "http://lblod.data.gift/vocabularies/besluit/hasAdditionalTaxRate",
      ],
      link: ["http://purl.org/dc/terms/hasPart"],
      tax_rate_amount: ["http://mu.semte.ch/vocabularies/ext/taxRateAmount"],
      session_started_at_time: [
        "http://mu.semte.ch/vocabularies/ext/sessionStartedAtTime",
      ],
      submission: [
        "^http://www.w3.org/ns/prov#generated",
        "http://mu.semte.ch/vocabularies/core/uuid",
      ],
      is_about: [
        "http://data.europa.eu/eli/ontology#is_about",
        "http://mu.semte.ch/vocabularies/core/uuid",
      ],
      passed_by: [
        "http://data.europa.eu/eli/ontology#passed_by",
        "http://mu.semte.ch/vocabularies/core/uuid",
      ],
      decision_type: [
        "http://mu.semte.ch/vocabularies/ext/decisionType",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
      ],
      regulation_type: [
        "http://mu.semte.ch/vocabularies/ext/regulationType",
        "http://www.w3.org/2004/02/skos/core#prefLabel",
      ],
    },
    mappings: {
      properties: {
        submission: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        regulation_type: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        decision_type: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        passed_by: {
          type: "text",
          fields: {
            field: {
              type: "keyword",
            },
          },
        },
        is_about: {
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
