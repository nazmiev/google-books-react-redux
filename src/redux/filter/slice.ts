import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
  searchValue: '',
  categoryValue: 'all',
  currentPage: 1,
  sort: {
    name: "relevance",
    sortProperty: SortPropertyEnum.RELEVANCE,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryValue(state, action: PayloadAction<string>) {
      state.categoryValue = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.currentPage = Number(action.payload.currentPage);
        state.categoryValue = String(action.payload.categoryValue);
        state.sort = action.payload.sort;
      } else {
        state.currentPage = 1;
        state.categoryValue = '';
        state.sort = {
          name: 'relevance',
          sortProperty: SortPropertyEnum.RELEVANCE,
        }
      }
    },
  },
});

export const { setCategoryValue, setSort, setCurrentPage, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;