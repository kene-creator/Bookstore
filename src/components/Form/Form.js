import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books.js';

const Form = () => {
  const dispatch = useDispatch();
  const titleInputRef = useRef(null);
  const authorInputRef = useRef(null);

  const addBookHandler = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const author = authorInputRef.current.value;
    const send = dispatch(
      addBook(title, author, uuidv4(), 'Action', Math.ceil(Math.random() * 10))
    );
    titleInputRef.current.value = '';
    authorInputRef.current.value = '';
    return send;
  };

  return (
    <form
      action=""
      className="flex justify-center flex-col items-center  w-full mb-12"
      onSubmit={addBookHandler}
    >
      <h3 className="self-start ml-80 text-2xl">Add new book</h3>
      <div>
        <input
          type="text"
          placeholder="Book Title"
          className="p-2 bg-white border-black border-solid border"
          ref={titleInputRef}
        />
        <input
          type="text"
          placeholder="Author"
          className="ml-4 p-2 border-black border-solid border"
          ref={authorInputRef}
        />
        <button
          className="ml-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4"
          onClick={addBookHandler}
        >
          Add Book
        </button>
      </div>
    </form>
  );
};

export default Form;
