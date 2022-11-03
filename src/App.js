import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar.js';
import Categories from './pages/Categories.js';
import Card from './components/UI/Card.js';
import BookList from './components/UI/BookList.js';
import Form from './components/Form/Form.js';

const DUMMY_BOOKS = [
  {
    id: '1',
    title: 'The Hunger games',
    author: 'Suzanne Collins',
    genre: 'Action',
    percentage: 20,
  },

  {
    id: '2',
    title: 'Rhapsody of Realities',
    author: 'Pastor Chris',
    genre: 'Action',
    percentage: 45,
  },

  {
    id: '3',
    title: 'Eat that Frog',
    author: 'John Maxwell',
    genre: 'Action',
    percentage: 75,
  },
  {
    id: '4',
    title: 'The Hunger games',
    author: 'Suzanne Collins',
    genre: 'Action',
    percentage: 43,
  },
];

function App() {
  const [books, setBooks] = useState(DUMMY_BOOKS);
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
