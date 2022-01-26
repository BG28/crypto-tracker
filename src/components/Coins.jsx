import React from 'react';
import './Coin.css';

function Coins({name, image, symbol, price, volumes, priceChange, marketcap}) {
  return(
      <div className='coin_container'>
        <div className='coin_row'>
            <div className='coin'>
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className='coin_symbol'>{symbol}</p>
            </div>
            <div className='coin_data'>
                <p className='coin_price'>Rs{price}</p>
                <p className='coin_volume'>Rs{volumes.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className='coin_percent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coin_percent green'>{priceChange.toFixed(2)}%</p>
                )}
                <p className='coin_marketcap'>
                    Mkt Cap : Rs{marketcap.toLocaleString()}
                </p>
            </div>
        </div>
      </div>
  )
}

export default Coins;
