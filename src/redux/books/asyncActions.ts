import { createAsyncThunk } from "@reduxjs/toolkit";
import { BooksResponse } from "./types";
import axios from "axios";

// export const fetchBooks = createAsyncThunk(
export const fetchBooks = createAsyncThunk<any[], any>(
    'books/fetchBooksStatus',
    async (params) => {
        const { sortBy, category, search, currentPage } = params;
        console.log('category: ', category, sortBy, currentPage);
        const { data } = await axios.get<BooksResponse>(
            // 'https://www.googleapis.com/books/v1/volumes?' + new URLSearchParams({ q: search, maxResults: '20', startIndex: '0' })
            `https://www.googleapis.com/books/v1/volumes?q=${search}${category}`

        );
        return data.items;
    }
)