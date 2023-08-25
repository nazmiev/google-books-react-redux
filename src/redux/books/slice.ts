import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books, BooksSliceState, Status } from "./types";
import { fetchBooks } from "./asyncActions";


const initialState: BooksSliceState = {
    items: [],
    status: Status.LOADING,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Books[]>) {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchBooks.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
        })
    }
});

export const { setItems } = booksSlice.actions;

export default booksSlice.reducer;