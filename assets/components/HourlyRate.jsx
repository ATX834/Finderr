import axios from 'axios';
import React,{useState, useEffect} from 'react';

export default function HourlyRate(){
  const [prices, setPrices] = useState();

  const fetchPrices = ()=>{
    axios.get('/api/hourly-rate/').then(r=>r.data).then(setPrices);
  }
  useEffect(()=>{
    fetchPrices();
  },[])
  return (
    <>
    <h1>Hourly Rates</h1>
    {prices && (
      <ul>
        {prices[0] && prices[0].map((e)=><li>{e}</li>)}    
      </ul>
    )
    }</>
  );
}