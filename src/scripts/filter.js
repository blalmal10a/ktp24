import Fuse from "fuse.js";
import { songs, filteredSongs } from "./songs";
const fuseOptions = {
  // isCaseSensitive: false,
  // includeScore: false,
  // shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  // fieldNormWeight: 1,
  keys: ["title", "lyrics", "number"],
};

const fuse = new Fuse(songs, fuseOptions);

function onFilterSongs(val, done) {
  done(() => {
    if (val?.length < 2) {
      filteredSongs.value = songs;
      return;
    }
    filteredSongs.value = fuse.search(val);
  });
}
export { onFilterSongs };
