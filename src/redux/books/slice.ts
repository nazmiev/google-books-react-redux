import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books, BooksSliceState, Status } from "./types";
import { fetchBooks } from "./asyncActions";


const initialState: BooksSliceState = {
    status: Status.LOADING,
    items: [],
    counter: 0,
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Books[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.pending, (state) => {
            state.status = Status.LOADING;
            state.items = [];
            state.counter = 0;
        });
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = Status.SUCCESS;
            state.items = action.payload.items;
            state.counter = action.payload.totalItems;
        });
        builder.addCase(fetchBooks.rejected, (state) => {
            state.status = Status.ERROR;
            state.items = [];
            state.counter = 0;
        })
    }
});

export const { setItems } = booksSlice.actions;

export default booksSlice.reducer;