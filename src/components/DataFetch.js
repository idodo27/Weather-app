import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Weather, {getCity} from './Weather'

   
const citys = ["", "Tel-Aviv", "Eilat", "Paris", "New-York", "Vancouver", "Hong-Kong", "London"];

function DataFetch() {
    const [name, setName] = useState();
    const [city, setCity] = useState([]);
    const api = "api-key";
    useEffect(() => {
        setName(getCity());
    axios
        .get("https://api.openweathermap.org/data/2.5/weather?q="+citys[parseInt(getElementById(Weather))]+"&appid="+api)
        .then((res) => {
            setCity(res.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, [city, name]);

    return (
        
        <div Style="padding: 30px">

                    <Weather/>
                    {name != null ? 
                    <p>City name: {city.name}<br></br>
                    Visibility: {city.visibility}<br></br>
                    Wind: {city.wind.speed}<br></br>
                    Temp: {Math.round(city.main.temp - 273.15)}<br></br>
                    Sunrise: {city.sys.sunrise}<br></br>
                    Sunset: {city.sys.sunset}<br></br>  
                    </p> : <p></p>}</div>
    );
    
}
export default DataFetch;
