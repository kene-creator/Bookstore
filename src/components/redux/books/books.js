import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_BOOK = 'book-store-app/books/ADD_BOOK';
const FETCH_BOOKS = 'book-store-react/books/FETCH_BOOKS';
const REMOVE_BOOK = 'book-store-app/books/REMOVE_BOOK';

const bookList = [];
// eslint-disable-next-line operator-linebreak
const url =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BDargG3MOWpp98NgP4Mb/books/';

const bookReducer = (state = bookList, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'book-store-react/books/FETCH_BOOKS/fulfilled':
      return payload.books;

    case 'book-store-app/books/ADD_BOOK/fulfilled':
      return [...state, payload.books];

    case 'book-store-app/books/REMOVE_BOOK/fulfilled':
      return state.filter((item) => item.item_id !== payload.item_id);

    default:
      return state;
  }
};

export const fetchBooks = createAsyncThunk(FETCH_BOOKS, async () => {
  const res = await axios.get(url);
  const resultArray = Object.entries(res.data);

  return {
    books: resultArray.map(([key, value]) => ({ ...value[0], item_id: key }))
  };
});

export const addBook = createAsyncThunk(ADD_BOOK, async (payload) => {
  await axios.post(url, {
    item_id: payload.id,
    title: payload.title,
    author: payload.author,
    category: payload.category,
    percentage: payload.percentage
  });

  return {
    books: payload
  };
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (itemId) => {
  await axios.delete(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BDargG3MOWpp98NgP4Mb/books/${itemId}`
  );

  return { itemId };
});

export default bookReducer;
