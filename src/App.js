import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Coins from './components/Coins';
import './App.css';

function App() {

  const [coins,setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredCoins = coins.filter(coin => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  })

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false").then(res => {
      setCoins(res.data);
    }).catch(err => alert(err));
  },[]);

  return (
    <div className="coin-app">
      <div className='coin-search'>
        <h1 className='coin-text'>Search for a coin</h1>
        <form>
          <input type="text" className="coin-input" onChange={handleChange} id="coin" placeholder='search'/>
        </form> 
      </div>
      {filteredCoins.map(coin => {
        return (<Coins 
          key={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volumes={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          marketcap={coin.market_cap}
        />
        )
      })}
    </div>
  );
}

export default App;
