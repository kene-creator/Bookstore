import { useDispatch } from 'react-redux';
import { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { addBook, fetchBooks } from '../redux/books/books.js';

const Form = () => {
  const dispatch = useDispatch();
  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const author = authorInputRef.current.value;
    const state = {
      id: uuidv4(),
      title,
      author,
      category: 'Action',
      percentage: Math.ceil(Math.random() * 10)
    };
    dispatch(addBook(state));
    titleInputRef.current.value = '';
    authorInputRef.current.value = '';
  };

  return (
    <form
      action=""
      className="flex justify-center flex-col items-center  w-full mb-12"
      onSubmit={addBookHandler}
    >
      <h3 className="ml-auto mr-auto mb-8 text-3xl font-semibold">
        Add new book
      </h3>
      <div className="w-full flex justify-center">
        <input
          type="text"
          placeholder="Book Title"
          className="p-1.5 bg-white border-black border-solid border w-1/3"
          ref={titleInputRef}
        />
        <input
          type="text"
          placeholder="Author"
          className="ml-4 p-2 border-black border-solid border w-1/3"
          ref={authorInputRef}
        />
        <button
          className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
          onClick={addBookHandler}
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default Form;
