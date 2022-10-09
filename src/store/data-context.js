import { createContext } from "react";

const DataContext = createContext({
  mode: false,
  themeHandler: () => { },
  data: [],
  setSelectedRegion: () => {},
  selectedRegion: [],
  getRegion: [],
  searchData: '',
  countrySearchHandler: () => {},
  getSearchAll: [],
  isLoading: true
});

export default DataContext;