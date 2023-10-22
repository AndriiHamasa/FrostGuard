import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import useStyles from "./CardItem-styles";
import IconWeather from "../IconList/IconList";
import getWeatherDescription from "../../../helpers/getWeatherDescription";
import getTemperatureArr from "../../../helpers/getTemperatureArr";
import { useState } from "react";
import saveToLocal from "../../../helpers/saveToLocal";
import removeFromLocal from "../../../helpers/removeFromLocal";

// берем текущее время, округляем вверх, потом ищем - и это будет индекс в массиве кодов, забираем код погоды, запускаем функцию, каторая определяет нужный компонент
// берем температуру, та что current, ищем минимальную и максимаотную температуру из части массива из первых 23 элементов

const CardItem = ({ data, openModal }) => {
  const [isSaved, setIsSaved] = useState(false);
  const classes = useStyles();
  const { user, weather } = data;
  // const currentTime = weather.current_weather.time.split('T')[1]
  const currentTemperature = weather.current_weather.temperature;
  const temperatureArr = getTemperatureArr(
    [...weather.hourly.temperature_2m].slice(0, 24),
    currentTemperature
  );
  const codeWeather = weather.current_weather.weathercode;
  const weatherDescription = getWeatherDescription(codeWeather);
  

  const handleSave = () => {
    setIsSaved(!isSaved);
    
    if (isSaved) {
      removeFromLocal(data.user.email)
    } else {
      saveToLocal(data)
    }
  }

  const handleShowWeather = () => {
    openModal(data)
  }
  return (
    <Card>
      <div className={classes.card}>
        <CardHeader
          className={classes.subCardName}
          title={`${user.name?.title} ${user.name?.first} ${user.name?.last}`}
          subheader={data.user.email}
        />
        <Avatar
          // className={classes.subCardAvatar}
          alt={user.name.first}
          src={user.picture.large}
          className={classes.avatar}
        />
      </div>
      <CardContent className={classes.cardContent}>
        <Typography variant="body1">User information</Typography>
        <Typography variant="body2" color="textSecondary">
          Gender: {user.gender}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Location:{" "}
          {`${user.location.country}, ${user.location.city}, str.${user.location.street.name} ${user.location.street.number}`}
        </Typography>
        <Typography variant="body1">Weather information</Typography>

        <IconWeather code={codeWeather} />
        <Typography variant="body2" color="textSecondary">
          Weather description: {weatherDescription}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Temperature-current: {temperatureArr.current}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Temperature-min: {temperatureArr.min}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Temperature-max: {temperatureArr.max}
        </Typography>
        <Button variant={ !isSaved ? "contained" : "outlined"} color={ !isSaved ? "success" : "error"} onClick={handleSave}>
          { !isSaved ? "Save" : "Remove"}
        </Button>
        <Button color="secondary" onClick={handleShowWeather}>Weather</Button>
        {/* <IconWeatherFog/> */}
      </CardContent>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  data: PropTypes.shape(),
  openModal: PropTypes.func.isRequired,
};
