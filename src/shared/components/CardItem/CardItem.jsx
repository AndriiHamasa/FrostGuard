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
import css from "./CardItem.module.css"

const CardItem = ({ data, openModal, type, deleteCard }) => {
  const [isSaved, setIsSaved] = useState(false);
  const classes = useStyles();
  const { user, weather } = data;

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
      removeFromLocal(data.user.email);
    } else {
      saveToLocal(data);
    }
  };

  const handleShowWeather = () => {
    openModal(data);
  };
  return (
    <Card>
      <div className={classes.card}>
        <CardHeader
          className={classes.subCardName}
          title={`${user.name?.title} ${user.name?.first} ${user.name?.last}`}
          subheader={data.user.email}
        />
        <Avatar
          alt={user.name.first}
          src={user.picture.large}
          className={classes.avatar}
        />
      </div>
      <CardContent className={classes.cardContent}>
        
        <Typography variant="body2" color="textSecondary">
          Gender: <strong>{user.gender}</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Location:
          <strong>{`${user.location.country}, ${user.location.city}, str.${user.location.street.name} ${user.location.street.number}`}</strong>
        </Typography>
        <div className={css.centeredContainer}><Typography variant="body1">Weather information</Typography></div>
        <div style={{display: "flex", justifyContent: "space-around"}}>
          <div>
            <Typography variant="body2" color="textSecondary">
              Temperature-current: <strong>{temperatureArr.current}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Temperature-min: <strong>{temperatureArr.min}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Temperature-max: <strong>{temperatureArr.max}</strong>
            </Typography>
            <Typography variant="body2" color="textSecondary">
          Weather description: <strong>{weatherDescription}</strong>
        </Typography>
          </div>
          <IconWeather code={codeWeather} size={64} />
        </div>
        
        <div className={css.centeredContainer}>
        
        {type === "home" ? (
          <Button
            variant={!isSaved ? "contained" : "outlined"}
            color={!isSaved ? "success" : "error"}
            onClick={handleSave}
          >
            {!isSaved ? "Save" : "Remove"}
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="error"
            onClick={() => deleteCard(data.user.email)}
          >
            Remove
          </Button>
        )}

        <Button color="secondary" onClick={handleShowWeather}>
          Weather
        </Button></div>
      </CardContent>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  data: PropTypes.shape(),
  openModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  deleteCard: PropTypes.func,
};
