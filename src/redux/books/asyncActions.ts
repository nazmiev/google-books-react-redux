import { createAsyncThunk } from "@reduxjs/toolkit";
import { BooksResponse } from "./types";
import axios from "axios";

export const fetchBooks = createAsyncThunk(
    'books/fetchBooksStatus',
    // async (params) => {
    async () => {
        // const { sortBy, category, search, currentPage } = params;
        const { data } = await axios.get<BooksResponse>(
            'https://www.googleapis.com/books/v1/volumes?' + new URLSearchParams({ q: 'как бросить курить', maxResults: '20', startIndex: '0' })
        );
        return data.items;
    }
)