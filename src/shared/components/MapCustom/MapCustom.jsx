// import { useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';

// const MapCustom = ({ latitude, longitude }) => {
//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmlpLWhhbWFzYTMxNCIsImEiOiJjbG8xbDB2NnkxcHBsMmpxb3lpZnoycHV4In0.uT16OZiOhXa3ijxI977rgg'; // Замените на свой API-ключ

//     const map = new mapboxgl.Map({
//       container: 'map', // ID элемента, в котором будет отображена карта
//       style: 'mapbox://styles/mapbox/streets-v11', // Стиль карты (вы можете выбрать другой)
//       center: [longitude, latitude], // Широта и долгота
//       zoom: 12, // Уровень масштабирования
//     });

//     // Очистите ресурсы карты при размонтировании компонента
//     return () => map.remove();
//   }, [latitude, longitude]);

//   return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
// };

// export default MapCustom;
// sk.eyJ1IjoiYW5kcmlpLWhhbWFzYTMxNCIsImEiOiJjbG8xbHd4Zm4wMHNrMmpteHR1cTBtZ2VrIn0.M17R_AQvwj2uhsKtlkMUSA

// import { useEffect } from 'react';
// import mapboxgl from 'mapbox-gl';
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

// const MapCustom = ({ city }) => {
//   useEffect(() => {
//     mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmlpLWhhbWFzYTMxNCIsImEiOiJjbG8wYmw4cXUwY25sMmpvM3VvY213emFqIn0.T8x3wh96JJrhQsJVCfTYrA';

//     const map = new mapboxgl.Map({
//       container: 'map',
//       style: 'mapbox://styles/mapbox/streets-v11',
//       center: [0, 0], // Начальный центр карты
//       zoom: 1, // Начальный уровень масштабирования
//       interactive: false, // Отключить интерактивность карты
//     });

//     // Инициализация геокодера
//     const geocoder = new MapboxGeocoder({
//       accessToken: mapboxgl.accessToken,
//       mapboxgl: mapboxgl,
//       marker: true, // Включить маркер на карте
//     });

//     // Добавление геокодера на карту
//     map.addControl(geocoder);

//     // Определение города и установка метки в его центр
//     geocoder.query(city); // Выполнение запроса на геокодирование по названию города

//     // Очистка ресурсов карты при размонтировании компонента
//     return () => map.remove();
//   }, [city]);

//   return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
// };

// export default MapCustom;
