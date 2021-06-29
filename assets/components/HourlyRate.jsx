import axios from 'axios';
import React,{useState, useEffect, useContext} from 'react';
import UserContext from '../context/UserContext';

export default function HourlyRate(){
  const [prices, setPrices] = useState();
  const {userHourlyRate, setUserHourlyRate}=useContext(UserContext);

  const handleClick = (e) =>{
    setUserHourlyRate(e);
  }
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
        {prices[0] && prices[0].map((e)=><li><button onClick={()=>handleClick(e)}>{e}</button></li>)}    
      </ul>
    )
    }</>
  );
}