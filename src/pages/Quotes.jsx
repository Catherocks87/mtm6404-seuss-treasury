import { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch('https://seussology.info/api/quotes')
      .then(response => response.json())
      .then(data => setQuotes(data.slice(0, 10)));
  }, []);

  return (
    <div>
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index}>{quote.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
