import { createAsyncThunk } from "@reduxjs/toolkit";
import { BooksResponse, SearchBooksParams } from "./types";
import axios from "axios";

export const fetchBooks = createAsyncThunk<BooksResponse, SearchBooksParams>(
    'books/fetchBooksStatus',
    async (params: SearchBooksParams) => {
        const { data } = await axios.get<BooksResponse>(
            'https://www.googleapis.com/books/v1/volumes', {
            params: params
        });
        return data;
    }
)
