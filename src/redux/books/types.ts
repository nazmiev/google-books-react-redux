export type Books = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
}

export type BooksResponse = {
    items: Books[];
    totalItems: number;
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface BooksSliceState {
    items: Books[];
    counter: number;
    status: Status;
}

export type SearchBooksParams = {
    sortBy: string, 
    subject: string, 
    q: string, 
    startIndex: number,
    maxResults: number,
}