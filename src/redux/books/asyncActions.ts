import { createAsyncThunk } from "@reduxjs/toolkit";
import { BooksResponse } from "./types";
import axios from "axios";

export const fetchBooks = createAsyncThunk<any[], any>(
    'books/fetchBooksStatus',
    async (params) => {
        const { sortBy, category, search, currentPage } = params;
        console.log('createAsyncThunk. category, sortBy, search, currentPage : ', category, sortBy, search, currentPage);
        const { data } = await axios.get<BooksResponse>(
            // `https://www.googleapis.com/books/v1/volumes?q=${search}${category}&orderBy=${sortBy}`
            `https://www.googleapis.com/books/v1/volumes?q=${search}${category}&orderBy=${sortBy}${currentPage}`
        );
        return data.items;
    }
)