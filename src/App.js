import React, {useState, useEffect} from 'react';
import './App.css';
import cloudy from "./cloudy.webp";
import rain from "./rain.webp";
import sun from "./sun.webp";
import {getLocation} from './data/weatherapi';
import Weather, { getCity } from './components/Weather';
const App = props => {
  const [Location, setLocation] = useState(null);
  const [city, setCity] = useState();
  
  const citys = ["", "Tel-Aviv", "Eilat", "Paris", "New-York", "Vancouver", "Hong-Kong", "London"];
  
  const getIcon = () => {
    let icon = "";
    switch (Location.weather[0].main) {
      case "Clouds":
        icon = cloudy;
        break;
      case "Clear":
        icon = sun;
        break;
      case "Rain":
        icon = rain;
        break;
      default:
        break;
    }
    return (
      <img className="icon-set" src={icon}/>
    );
  }

  const getData = async () => {
    try{ 
        const data = await getLocation(city);
        setLocation(data);
        
    }catch(error) {
      console.log(error.message);
      
    }
  }

  useEffect(() => {
    getData();
  }, [city]);
  return (
    <body Style="background-color: cadetblue;">
    <div className="divi">
      <div>
        <h1><i>Weather App</i></h1>
        <Weather setCityName={setCity}/>
        {Location !== null ? (
          <div>
            <h4>Live Weather Condition</h4>

            <h3>{Location.weather[0].main}</h3>
            <div>{getIcon()}</div>
            <div>
              <h2>{parseFloat(Location.main.temp - 273.15).toFixed(1)}&deg;C</h2>
            </div>
            <div>
              <h3><i></i>{Location.name} | {Location.sys.country}</h3>
            </div>
            <div className="divi">              
              <b>
                City name: {Location.name}<br></br>
                Description: {Location.weather[0].description}<br></br>
                Visibility: {Location.visibility}<br></br>
                Wind: {Location.wind.speed}<br></br>
                Temp: {Math.round(Location.main.temp - 273.15)}<br></br>
                Sunrise: {Location.sys.sunrise}<br></br>
                Sunset: {Location.sys.sunset}<br></br>
              </b>
            </div>
        </div>
        
        ) : <div className="divi"></div>}
         
              
      </div>
     
    </div>
    </body>
  );
}

export default App;