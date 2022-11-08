import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'book-store-app/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store-app/books/REMOVE_BOOK';

const DUMMY_BOOKS = [
  {
    id: uuidv4(),
    title: 'The Hunger games',
    author: 'Suzanne Collins',
    genre: 'Action',
    percentage: 20
  },

  {
    id: uuidv4(),
    title: 'Rhapsody of Realities',
    author: 'Pastor Chris',
    genre: 'Action',
    percentage: 45
  },

  {
    id: uuidv4(),
    title: 'Eat that Frog',
    author: 'John Maxwell',
    genre: 'Action',
    percentage: 75
  },
  {
    id: uuidv4(),
    title: 'The Hunger games',
    author: 'Suzanne Collins',
    genre: 'Action',
    percentage: 43
  }
];

const booksReducer = (state = DUMMY_BOOKS, action) => {
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

export const addBookType = () => ({ type: ADD_BOOK });
export const RemoveBookType = () => ({ type: REMOVE_BOOK });

export default booksReducer;
