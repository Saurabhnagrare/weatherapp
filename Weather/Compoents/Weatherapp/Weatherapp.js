import React from 'react';
import "./Weatherapp.css";
import search from "../Asssets/search.png";
import snow from "../Asssets/snow.png";
import wind from "../Asssets/wind.png";
import rain from "../Asssets/rain.png";
import humidity from "../Asssets/humidity.png";
import drizzle from "../Asssets/drizzle.png";
import cloud from "../Asssets/cloud.png";
import clear from "../Asssets/clear.png";


const Weatherapp = () => {
  let api_key = "7dbb2ed95a9bb4e6d3a847a878595d14";

  const searc = async () => {
    const element = document.getElementsByClassName("cityinput");
    if (element[0].value === "") {
      return 0;
    }
    
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let responce = await fetch(url);
    let data = await responce.json();
    const humidity = document.getElementsByClassName("humidity_percentage");
    const wind = document.getElementsByClassName("wind_rate");
    const tempture = document.getElementsByClassName("tempture");
    const location = document.getElementsByClassName("location");

    humidity[0].innerHTML =   data.main.humidity+ "  %";
    wind[0].innerHTML = data.wind.speed+ " km/h";
    tempture[0].innerHTML = data.main.temp+ " c";
    location[0].innerHTML = data.name;

  }

  return (
    <div className='container'>
      <div className='topbar'>
        <input type='text' className='cityinput' placeholder='search' />
        <div className='searchicon' onClick={() => { searc() }}>
          <img src={search} alt='search' />
        </div>
      </div>
      <div className='weather_img'>
        <img src={cloud} />
      </div>
      <div className='tempture'>24*c</div>
      <div className='location'>nagpur</div>
      <div className='datacontainer'>
        <div className='element'>
          <img src={humidity} alt='' className='icon' />
          <div className='data'>
            <div className='humidity_percentage'>64%</div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind} alt='' className='icon' />
          <div className='data'>
            <div className='wind_rate'>80 kmph</div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weatherapp
