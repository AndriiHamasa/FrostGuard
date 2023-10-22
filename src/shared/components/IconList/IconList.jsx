
import { PropTypes } from "prop-types";
import { weatherCodeList } from "../../../helpers/weather-code-list";
const {sun, partlyCloudy, fog, littleRain, freezingRain, rain, snow, snowfail, snowflakes, thunderstorm} = weatherCodeList


import {WiDaySunny, WiDayCloudyHigh, WiDayFog, WiDayRainMix, WiDaySleet, WiDaySprinkle, WiDaySnowWind, WiDayRainWind, WiDayShowers, WiDaySleetStorm} from "react-icons/wi"

// sun.includes(code)
const IconWeather = ({code, size}) => {
  if (sun.includes(code)) {
    return <WiDaySunny size={size} color="#00f"/>
  }
  else if (partlyCloudy.includes(code)) {
    return <WiDayCloudyHigh size={size} color="#00f"/>
  }
  else if (fog.includes(code)) {
    return <WiDayFog size={size} color="#00f"/>
  }
  else if (littleRain.includes(code)) {
    return <WiDayRainMix size={size} color="#00f"/>
  }
  else if (freezingRain.includes(code)) {
    return <WiDaySleet size={size} color="#00f"/>
  }
  else if (rain.includes(code)) {
    return <WiDaySprinkle size={size} color="#00f"/>
  }
  else if (snow.includes(code)) {
    return <WiDaySnowWind size={size} color="#00f"/>
  }
  else if (snowfail.includes(code)) {
    return <WiDayRainWind size={size} color="#00f"/>
  }
  else if (snowflakes.includes(code)) {
    return <WiDayShowers size={size} color="#00f"/>
  }
  else if (thunderstorm.includes(code)) {
    return <WiDaySleetStorm size={size} color="#00f"/>
  }

}

export default IconWeather

IconWeather.propTypes = {
  code: PropTypes.number.isRequired,
  size:PropTypes.number,
}