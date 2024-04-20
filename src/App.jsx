/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Weather from './components/Weather';
import axios from 'axios';


const App = ()=> {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const searchLocation=(event)=>{
    if(event.key==='Enter'){
      axios
      .get(url)
      .then((response)=>{
        setData(response.data);
        console.log(response.data);
      })
      searchLocation("");

    }

  }


  const API_KEY="REPLACE THIS WITH YOUR API KEY";
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  

return (
<div className='w-full h-full relative'>
  <div className='text-center p-4'>
    <input type='text' 
    className='py-3 px-6 w-full sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md' 
    placeholder='Enter location'  value={location} onChange={(event)=>{
      setLocation(event.target.value);
     }}
     onKeyDownCapture={searchLocation}/>

  </div>
  <Weather weatherData={data}/>




</div>)  
}
export default App;

