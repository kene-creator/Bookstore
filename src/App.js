import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import Navbar from './components/UI/Navbar.js';
import Categories from './pages/Categories.js';
import Card from './components/UI/Card.js';
import BookList from './components/UI/BookList.js';
import Form from './components/Form/Form.js';
import { fetchBooks } from './components/redux/books/books.js';

function App() {
  const apiBooks = useSelector((state) => state.book, shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    // setBooks(apiBooks);
  }, [dispatch]);

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Card>
                <BookList bookItem={apiBooks}></BookList>
              </Card>
              <Form />
            </>
          }
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
