import "./Search.css";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Infobox({ info }) {
    const hazeImg = "https://images.unsplash.com/photo-1706103780703-d044f10c30a8?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const coldImg = "https://images.unsplash.com/photo-1593936639737-35be481dc1d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hotImg = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainyImg = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaGVlfGVufDB8fHx8fA%3D%3D";

    return (
        <div className="W_card">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80
                            ? rainyImg
                            : info.temp > 30
                            ? hotImg
                            : info.temp < 15
                            ? coldImg
                            : hazeImg
                    }
                    title="Weather"
                />

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                        component="div"
                    >
                        <p>Temperature : {info.temp}&deg;C</p>
                        <p>Humidity : {info.humidity}%</p>
                        <p>Speed : {info.speed} m/s</p>
                        <p>
                            The Weather can be described as {info.weather}
                            {" "}and it feels like {info.feelsLike}&deg;C
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}