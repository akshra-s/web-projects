import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = import.meta.env.VITE_API_KEY;

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let getWeather = async () => {
        try {
            let res = await fetch(
                `${API_URL}?q=${city}&appid=${API_key}&units=metric`
            );

            let jsonRes = await res.json();

            if (!res.ok) {
                throw new Error("Place not found");
            }

            let result = {
                city: city,
                weather: jsonRes.weather[0].description,
                feelsLike: jsonRes.main.feels_like,
                temp: jsonRes.main.temp,
                humidity: jsonRes.main.humidity,
                speed: jsonRes.wind.speed,
            };

            console.log(result);
            return result;

        } catch (error) {
            throw error;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
        setError(false);
    };

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();

            let newinfo = await getWeather();
            updateInfo(newinfo);
            setCity("");

        } catch (error) {
            setError(true);
        }
    };

    return (
        <div className="sBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    value={city}
                    variant="outlined"
                    required
                    onChange={handleChange}
                />

                <Button
                    variant="contained"
                    color="success"
                    type="submit"
                >
                    Search
                </Button>

                {error && (
                    <p style={{ color: "red" }}>
                        ⚠ Place not found!
                    </p>
                )}
            </form>
        </div>
    );
}