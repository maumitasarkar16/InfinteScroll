import { useEffect, useState } from 'react';
import CryptoList from './components/CryptoList';
import Header from './components/Header';

function App() {
  const PAGE_NUMBER = 1;
  const LIMIT = 12;

  const [crypto, setCrypto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {

    setTimeout(async () => {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page="+ LIMIT +"&page=" + page + "&sparkline=false");
      const data =  await response.json()

      setCrypto([...crypto, ...data] );
      setLoading(false);
  }, 1500);

  }, [page])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };


  return (
    <div className='app '>
      <Header />
      <CryptoList list={crypto} />
      <h1 className='px-20 py-4 font-semibold'>{loading && "Loading..."}</h1>
    </div>

  )
}


export default App


