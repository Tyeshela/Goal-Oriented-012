import React, { useState, useEffect } from 'react'

const App = () => {
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Error fetching quote');
      }
      const data = await response.json();
      setQuote(data);
    } catch (error) {
      console.error('Error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='bg-white p-6 rounded shadow-lg text-center'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <p className='text-lg font-semibold'>"{quote.content}"</p>
            <p className='text-md text-gray-600 mt-4'>— {quote.author}</p>
          </>
        )}
        <button onClick={fetchQuote} className='bg-blue-500 text-white px-4 py-2 mt-6 rounded hover:bg-blue-600 transition-colors'>Get New Quote</button>
      </div>
    </div>
  )
}

export default App;