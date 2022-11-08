import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import Navbar from './components/UI/Navbar.js';
import Categories from './pages/Categories.js';
import Card from './components/UI/Card.js';
import BookList from './components/UI/BookList.js';
import Form from './components/Form/Form.js';

function App() {
  const dumBooks = useSelector((state) => state.booksReducer, shallowEqual);
  const [books, setBooks] = useState(dumBooks);

  useEffect(() => {
    setBooks(dumBooks);
  }, [dumBooks]);

  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Card>
                <BookList bookItem={books} setBooks={setBooks}></BookList>
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
