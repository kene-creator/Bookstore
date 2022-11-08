import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../components/redux/categories/categories.js';

const Categories = () => {
  const categoryReducer = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center flex-col items-center mt-24 w-full">
      <h1 className="font-medium text-3xl text-red-400 ">{categoryReducer}</h1>
      <button
        className="rounded-lg bg-white drop-shadow-lg p-3 w-40 mt-24"
        type="submit"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        Check status
      </button>
    </div>
  );
};

export default Categories;
