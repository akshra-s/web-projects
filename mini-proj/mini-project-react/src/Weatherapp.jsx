import "./Search.css";
import Search from "./Search.jsx";
import Infobox from "./Infobox.jsx";
import { useState } from "react";

export default function W_app(){
    const [weatherinfo,setWeatherinfo]=useState({
            city:"Delhi",
            weather:"haze",
            feelsLike:25.05,
            temp:25.05,
            humidity:47,
            speed:2.3,
        });
    let updateInfo=(newinfo)=>{
        setWeatherinfo(newinfo);
    };
    return (
    <div className="weatherApp">
        <h2>Weather Finder 🔍</h2>
        <p className="subtitle">Find how it feels in your city!</p>

        <Search updateInfo={updateInfo} />
        <Infobox info={weatherinfo} />
    </div>
    );
    
}