import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

const BookEdit = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Book title saved:', title);
    onSubmit();
    editBookById(book.id, title);
    setTitle(''); // Reset the title after saving
  };
  return (
    <div className="book-edit">
      <h3>Edit Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title </label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button is-primary ">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
