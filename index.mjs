import get_eager_index_groups from "./eager_indexing_group.mjs";
import types from "./types.mjs";
import fs from "fs";

const DEFAULT_SETTINGS = {
  analysis: {
    normalizer: {
      custom_sort_normalizer: {
        type: "custom",
        char_filter: [],
        filter: ["lowercase", "trim", "asciifolding"],
      },
    },
  },
};

const NUMBER_OF_CPUS = 6;

async function make_config() {
  const groups = await get_eager_index_groups();

  const config = {
    automatic_index_updates: true,
    persist_indexes: true,
    number_of_threads: NUMBER_OF_CPUS,
    eager_indexing_groups: groups,
    default_settings: DEFAULT_SETTINGS,
    types: types
  };

  fs.writeFileSync("./config.json", JSON.stringify(config, null, 2));
}


(async () => await make_config())();