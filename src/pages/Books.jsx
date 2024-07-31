import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(response => response.json())
      .then(data => {
        console.log(data); // Log the data to inspect the URLs
        setBooks(data);
      })
      .catch(error => {
        console.error('Error fetching books:', error);
      });
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <div className="book-list">
        {books.map(book => (
          <Link to={`/book/${book.id}`} key={book.id}>
            <img 
              src={book.coverImageUrl} 
              alt={book.title} 
              onError={(e) => e.target.src='/src/assets/default-book-cover.jpg'} 
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Books;

