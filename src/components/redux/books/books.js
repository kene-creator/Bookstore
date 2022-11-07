const ADD_BOOK = 'book-store-app/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store-app/books/REMOVE_BOOK';

const booksReducer = (state = [], action) => {
  if (action.type === ADD_BOOK) {
    return [
      ...state,
      {
        title: action.title,
        author: action.author,
        genre: action.genre,
        percentage: action.percentage,
        id: action.id
      }
    ];
  }

  if (action.type === REMOVE_BOOK) {
    return state.filter((book) => book.id !== action.id);
  }

  return state;
};

export const addBook = (bookTitle, bookAuthor, bookId, genre, percentage) => {
  const book = {
    type: ADD_BOOK,
    title: bookTitle,
    author: bookAuthor,
    genre,
    percentage,
    id: bookId
  };
  return book;
};

export const removeBook = (bookId) => {
  const removedBook = {
    type: REMOVE_BOOK,
    id: bookId
  };
  return removedBook;
};

export default booksReducer;
