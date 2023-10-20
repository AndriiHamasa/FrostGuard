import { weatherDescriptionList } from "./weather-code-list";

const getWeatherDescription = (codeNumber) => {

  for (const key in weatherDescriptionList) {
    if (Object.hasOwnProperty.call(weatherDescriptionList, key)) {
      const description = weatherDescriptionList[key];
      if (Number(key) === codeNumber) {
        return description
      }
    }
  }
};

export default getWeatherDescription
