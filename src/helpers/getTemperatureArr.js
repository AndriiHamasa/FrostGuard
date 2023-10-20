const getTemperatureArr = (temperatureArr, current) => ({
  current,
  min: Math.min(...temperatureArr),
  max: Math.max(...temperatureArr)
});

export default getTemperatureArr
