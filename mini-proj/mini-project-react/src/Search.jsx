import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';


export default function Searchbox(){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_key = import.meta.env.VITE_API_KEY;
    let [city,setCity]=useState("");

    let getWeather= async ()=>{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
        let jsonRes=await res.json();
        // console.log(jsonRes);
        let result ={
            city:city,
            weather:jsonRes.weather[0].description,
            feelsLike:jsonRes.main.feels_like,
            temp:jsonRes.main.temp,
            humidity:jsonRes.main.humidity,
            speed:jsonRes.wind.speed,
        }
        console.log(result);
    };
    let handleChange=(event)=>{
        setCity(event.target.value);
    };
    
    let handleSubmit=(event)=>{
        event.preventDefault();
        // console.log(city);
        setCity("");
        getWeather();
    };
    return(
        <div className="sBox">
            <h4>&#9925; Find how it feels in your city!</h4>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" value={city} variant="outlined" required onChange={handleChange}/>
                <Button variant="contained" color="success" type="submit">Search</Button>
            </form>
        </div>
    );
}