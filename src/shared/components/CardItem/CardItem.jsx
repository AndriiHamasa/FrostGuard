import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
} from "@mui/material";
import useStyles from "./CardItem-styles";
import IconWeather from "../IconList/IconList";
import getWeatherDescription from "../../../helpers/getWeatherDescription";
import getTemperatureArr from "../../../helpers/getTemperatureArr";


// берем текущее время, округляем вверх, потом ищем - и это будет индекс в массиве кодов, забираем код погоды, запускаем функцию, каторая определяет нужный компонент
// берем температуру, та что current, ищем минимальную и максимаотную температуру из части массива из первых 23 элементов

const CardItem = ({ data }) => {
  const classes = useStyles();
  const { user, weather } = data;
  // const currentTime = weather.current_weather.time.split('T')[1]
  const currentTemperature = weather.current_weather.temperature
  const temperatureArr = getTemperatureArr([...weather.hourly.temperature_2m].slice(0, 24), currentTemperature)
  console.log('temperatureArr', temperatureArr)
  const codeWeather = weather.current_weather.weathercode
  const weatherDescription = getWeatherDescription(codeWeather)
  // console.log('currentTime ==>> ', currentTime)
  // console.log('codeWeather', codeWeather)
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

      {/* <CardMedia
        component="img"
        
        image={user.picture.large}
        alt={user.name.first}
        className={classes.cardMedia}
      /> */}
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
        {/* <IconWeatherFog/> */}
      </CardContent>
    </Card>
  );
};

export default CardItem;

CardItem.propTypes = {
  data: PropTypes.shape(),
};
