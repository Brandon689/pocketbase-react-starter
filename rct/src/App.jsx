import { useState, useEffect } from 'react';
import { authenticate, getCryptoList, createCrypto, updateCrypto, deleteCrypto } from './api.js';
import './App.css';

function App() {
  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await authenticate();
        const cryptoData = await getCryptoList();
        console.log(cryptoData);
        setCrypto(Array.isArray(cryptoData) ? cryptoData : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleCreateCrypto = async () => {
    try {
      const data = {
        name: 'test',
        symbol: 'test',
        price: 200
      };
      const record = await createCrypto(data);
      console.log(record);
    } catch (error) {
      console.error('Error creating Crypto:', error);
    }
  };

  const handleUpdateCrypto = async (id) => {
    try {
      const data = {
        name: 'test',
        symbol: 'test',
      };
      const record = await updateCrypto(id, data);
      console.log(record);
    } catch (error) {
      console.error('Error updating Crypto:', error);
    }
  };

  const handleDeleteCrypto = async (id) => {
    try {
      await deleteCrypto(id);
      setCrypto(crypto.filter(p => p.id !== id));
    } catch (error) {
      console.error('Error deleting Crypto:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {crypto.map((p) => (
        <div key={p.id}>
          <span>{p.name}</span>
          <button onClick={() => handleUpdateCrypto(p.id)}>Update</button>
          <button onClick={() => handleDeleteCrypto(p.id)}>Delete</button>
        </div>
      ))}
      <button onClick={handleCreateCrypto}>Create Crypto</button>
    </>
  );
}

export default App;
