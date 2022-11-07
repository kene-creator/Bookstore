import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books.js';
import categoriesReducer from './categories/categories.js';

const store = configureStore({
  reducer: {
    booksReducer,
    categoriesReducer
  }
});

export default store;
