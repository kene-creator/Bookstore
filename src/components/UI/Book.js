import { useDispatch } from 'react-redux';

import { removeBook } from '../redux/books/books.js';

const Book = (props) => {
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="flex justify-between align-center h-40 bg-white w-full drop-shadow-sm mb-6 p-6 font-mono">
      <div className="basis-1/3">
        <div>
          <p className="font-thin">{props.category}</p>
          <h3 className="text-2xl font-normal">{props.title}</h3>
          <p className="text-blue-600">{props.author}</p>
        </div>
        <div className="mt-4">
          <a href="" className="pr-4 text-blue-400 hover:text-blue-700">
            Comments
          </a>
          <a
            href=""
            className="pl-4 pr-4 text-blue-400 hover:text-blue-700 border-l border-black border-solid"
            onClick={(e) => {
              e.preventDefault();
              deleteHandler(props.id);
            }}
          >
            Remove
          </a>
          <a
            href=""
            className="pl-4 text-blue-400 hover:text-blue-700 border-l border-black border-solid"
          >
            Edit
          </a>
        </div>
      </div>

      <div className="flex">
        <div>
          <div
            className="circular_progress"
            style={{
              backgroundImage: `conic-gradient(#4d5df9 ${
                props.percentage * 3.6
              }deg, #cadcff ${props.percentage * 3.6}deg)`
            }}
          ></div>
        </div>

        <div className="ml-4">
          <h3 className="text-3xl">{`${props.percentage}%`}</h3>
          <p>completed</p>
        </div>
      </div>

      <div>
        <p>Current Chapter</p>
        <p>Chapter 7</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4">
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default Book;
