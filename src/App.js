import './App.css';
import {Accordion} from "./components/Accordion"
import {Heading} from "./components/Heading"
import {Button} from "./components/Button"
import {Input} from "./components/Input"
import {Typography} from "./components/Typography"
import {Tooltip} from "./components/Tooltip"
import { useEffect, useState } from 'react';


async function fetchData() {
  try {
    const response = await fetch('https://api.coinlore.net/api/tickers/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при запросе данных:', error);
  }
  
}



//[1,12,'123', 3,4,5, '123'].filter(item => item.toString().includes('12'));


function App() {

  

  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  const setFetchedData = async () => {
    try {
      setIsLoading(true)
      setState(null)
      const data = await fetchData();
      setState(data);
    } catch {} finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
    }
  }
  useEffect(() => {
    setFetchedData()
  }, []);
  console.log(state);

  const [inputValue, setInputValue] = useState('')

  return (<div>
    <Heading level = "h1">Cryptocurrency price</Heading>
    <Button onClick={setFetchedData} variant = "bordered" size = "sm"> Update</Button>
    <Input
      value={inputValue}
      onChange={(e) => {        
        setInputValue(e.target.value)
      }}
      placeholder = "Search"></Input>
    {
      isLoading
      ?
      'Loading...'
      :
      state?.data?.filter(item => (
        item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.symbol.toLowerCase().includes(inputValue.toLowerCase())
      )).map(item => (
        <Accordion title = {item.name}>
          
          <p><strong>Symbol</strong>: {item.symbol}</p>
          <p><strong>Price USD</strong>: {item.price_usd}</p>
          <p><strong>Price BTC</strong>: {item.price_btc}</p>
          <Tooltip position = "top" tooltipText = "The market capitalization of a cryptocurrency is calculated by multiplying the number of coins in circulation by the current price">
            <p><strong>Market Cap USD</strong>: {item.market_cap_usd}</p>
          </Tooltip>
          
          {
          item.percent_change_24h < 0 
          ?
          <p><strong>Percent Change 24H</strong>: <span style={{ color: 'red' }}>{item.percent_change_24h}% </span></p>

          :
          <p><strong>Percent Change 24H</strong>: <span style={{ color: 'green' }}>{item.percent_change_24h}% </span></p>
          }
          
          
        </Accordion>
      ))
      
    }
    
    
    
  </div>
    
  );
}


export default App;
