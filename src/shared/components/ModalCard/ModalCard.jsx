import PropTypes from "prop-types";
import { Card, CardContent, Typography } from "@mui/material";
import IconWeather from "../IconList/IconList";
import getWeatherDescription from "../../../helpers/getWeatherDescription";
// import getTemperatureArr from "../../../helpers/getTemperatureArr";
import css from "./ModalCard.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ModalCard = ({ data, day }) => {
  // const { temperature, weathercode } = data.weather.current_weather;
  // const currentTemperature = data.weather.current_weather.temperature;
  // const codeWeather = data.weather.current_weather.weathercode;
  // const weatherDescription = getWeatherDescription(weathercode);
  // const temperatureArr = getTemperatureArr(
  //   [...data.weather.hourly.temperature_2m].slice(0, 24),
  //   temperature
  // );

  const { temperature_2m, time, weathercode } = data.weather.hourly;
  const currentDayTemperatureArr = [...temperature_2m].slice(
    day * 24,
    24 * (day + 1)
  );

  // везде одинаковые
  const timeArr = [...time].slice(0, 24).map((time) => time.split("T")[1]);

  const weatherCodeArr = [...weathercode].slice(day * 24, (day + 1) * 24);

  const weatherDescriptionArr = weatherCodeArr.map((code) =>
    getWeatherDescription(code)
  );
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };

  return (
    <Slider {...settings}>
      {currentDayTemperatureArr.map((temperature, index) => (
        <Card key={timeArr[index]}>
          <CardContent style={{padding: "5px"}}>
            <div className={css.typographyContainer}><Typography variant="p" component="div" className={css.smallFont}>
              Time: {timeArr[index]}
            </Typography></div>
            <div className={css.iconContainer}><IconWeather code={weatherCodeArr[index]} size={32} /></div>
            <div className={css.typographyContainer}><Typography variant="p" component="div" className={css.smallFont}>
              {weatherDescriptionArr[index]}
            </Typography></div>
            <div className={css.typographyContainer}><Typography variant="p" component="div" className={css.smallFont}>
              {currentDayTemperatureArr[index]}
            </Typography></div>
          </CardContent>
        </Card>
      ))}
    </Slider>
  );
};

export default ModalCard;

ModalCard.propTypes = {
  data: PropTypes.shape(),
  day: PropTypes.number.isRequired,
};

{
  /* <Card>
      <div>
        <CardHeader title={`Time`} subheader={"mow"} />
      </div>
      <CardContent>
        <IconWeather code={weathercode} />
        <Typography variant="body2" color="textSecondary">
          Weather description: {weatherDescription}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Temperature-current: {temperature}
        </Typography>

         <IconWeatherFog/> 
        
      </CardContent>
    </Card> */
}
