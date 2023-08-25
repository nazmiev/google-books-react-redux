import { createAsyncThunk } from "@reduxjs/toolkit";
import { BooksResponse } from "./types";
import axios from "axios";

// export const fetchBooks = createAsyncThunk(
export const fetchBooks = createAsyncThunk<any[], any>(
    'books/fetchBooksStatus',
    async (params) => {
    // async () => {
        // const { sortBy, category, search, currentPage } = params;
        const { search } : any = params;
        console.log('search: ', search);
        const { data } = await axios.get<BooksResponse>(
            'https://www.googleapis.com/books/v1/volumes?' + new URLSearchParams({ q: search, maxResults: '20', startIndex: '0' })
        );
        return data.items;
    }
)