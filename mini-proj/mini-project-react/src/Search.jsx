import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';


export default function Searchbox(){
    let [city,setCity]=useState("");

    let handleChange=(event)=>{
        setCity(event.target.value);
    };
    
    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(city);
        setCity("");
    };
    return(
        <div className="sBox">
            <h3>Search Here :</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" value={city} variant="outlined" required onChange={handleChange}/> &nbsp;&nbsp;
                <Button variant="contained" color="success" type="submit">Search</Button>
            </form>
        </div>
    );
}