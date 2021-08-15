import React, {useEffect, useState} from 'react';

export const getCity = () => {
  return Weather.city;
}


const Weather = ({setCityName}) => {
    const citys = ["", "Tel-Aviv", "Eilat", "Paris", "New York", "Vancouver", "Hong Kong", "London"];
    const [city, setCity] = useState(citys[0]);
    const [counter, setCounter] = useState(0);

    function handle(field, value){
      field = value;
    }

    useEffect(() => {
      setCityName(city);
    },[city]);
    return (
    <div>
        <select
            onChange={(e) => {setCity(e.target.value)}}
            Style="height:36px; fontSize: 29px; margin:30px;">
            {citys.map((c, k) => (
              <option id={k} value={c} key={k}>{c}</option>
            
            ))
            }
            
          </select>
      </div>);
}
 
export default Weather;
