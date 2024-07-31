import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';
import Quotes from './pages/Quotes';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <h1>Seuss Treasury</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/quotes" element={<Quotes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

