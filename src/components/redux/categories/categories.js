const CHECK_STATUS = 'book-store-app/categories/CHECK_STATUS';

const categoriesReducer = (state = [], action) => {
  if (action.type === CHECK_STATUS) {
    return action.text;
  }
  return state;
};

export const checkStatus = () => {
  const status = {
    type: CHECK_STATUS,
    text: 'Under construction'
  };
  return status;
};

export default categoriesReducer;
