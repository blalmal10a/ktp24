import { ref } from "vue";

const searchBox = ref(null)
const showDownloadInstruction = ref(false)
const showSearch = ref(false);
const leftDrawerOpen = ref(false);
export {
  searchBox, showDownloadInstruction, showSearch, leftDrawerOpen, onClickSearch
}


function onClickSearch() {
  showSearch.value = true
  // setTimeout(() => {
  //   searchBox.value.showPopup();
  // }, 50);
}
