export enum SortPropertyEnum {
    RELEVANCE = "relevance",
    NEWEST = "newest"
  }
  
  export type Sort = {
    name: string,
    sortProperty: SortPropertyEnum,
  }
  
  export interface FilterSliceState {
    searchValue: string,
    categoryValue: string,
    currentPage: number,
    sort: Sort,
  }