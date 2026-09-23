import "./Search.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useState } from 'react';

export default function Infobox(){
    const startImg="https://images.unsplash.com/photo-1706103780703-d044f10c30a8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    let w_info={
            city:"delhi",
            feelsLike:29.61,
            humidity:62,
            speed:2.76,
            temp:27.96,
            weather:"clear sky"
    }
    return(
        <div className='W_card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={startImg}
                    title="Weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {w_info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"div"}>
                        <p>Temperature : {w_info.temp}&deg;C</p>
                        <p>Humidity : {w_info.humidity}%</p>
                        <p>Speed : {w_info.speed} km/hr</p>
                        <p>The Weather can be described as {w_info.weather} and it feels like {w_info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}