import axios from "axios";

const instanceWeather = (latitude, longitude) =>
  axios.create({
    baseURL: `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto&hourly=temperature_2m,weathercode`,
  });

export default instanceWeather;
