import Book from './Book.js';

const BookList = (props) => {
  if (props.bookItem.length === 0) {
    return <h2 className="text-3xl font-medium">Opps Add some books📚</h2>;
  }

  return (
    <ul className="flex justify-center align-center w-full">
      <li className="mb-4 w-10/12">
        {props.bookItem.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            percentage={book.percentage}
          ></Book>
        ))}
      </li>
    </ul>
  );
};

export default BookList;
