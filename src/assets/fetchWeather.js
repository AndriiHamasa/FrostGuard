import instanceWeather from "../shared/api/instance-weather";

const fetchWeather = async (userList) => {
  try {
    const weatherPromises = userList.map(async user => {
      const { latitude, longitude } = user.location.coordinates;
      const weatherInfoForUser = await instanceWeather(Number(latitude), Number(longitude)).get();
      return weatherInfoForUser.data;
    });

    const weatherList = await Promise.all(weatherPromises);
    return weatherList;
  } catch (error) {
    console.log(error.message);
  }
}

export default fetchWeather

// инстанс не должен меняться, просто изначально его нужно сделать короче, а там добавлять строчку