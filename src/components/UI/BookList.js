import React from 'react';
import Book from './Book.js';

const BookList = (props) => (
  <ul className="flex justify-center align-center w-full">
    <li className="mb-4 w-10/12">
      {props.bookItem.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          genre={book.genre}
          percentage={book.percentage}
        ></Book>
      ))}
    </li>
  </ul>
);

export default BookList;
