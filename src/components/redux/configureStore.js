import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import booksReducer from './books/books.js';
import categoriesReducer from './categories/categories.js';

const middleware = [thunk, logger];

const store = configureStore(
  {
    reducer: {
      book: booksReducer,
      category: categoriesReducer
    }
  },
  applyMiddleware(...middleware)
);

export default store;
