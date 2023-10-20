import { useEffect, useState } from "react";
import fetchUsers from "../../assets/fetchUsers";
import fetchWeather from "../../assets/fetchWeather";
import CardList from "../../shared/components/CardList/CardList";
import Loader from "../../shared/components/Loader/Loader";
import Button from "@mui/material/Button";
// import LoadingIndicator from "../../shared/components/LoadingIndicator/LoadingIndicator";

const MainPage = () => {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await fetchUsers();

        const weatherResponse = await fetchWeather(userResponse.results);

        const arr = userResponse.results.map((user, index) => ({
          user,
          weather: weatherResponse[index],
        }));

        setCardList(arr);
      } catch (error) {
        console.log(error.message);
      }
    };

    if (cardList.length === 0) {
      fetchData();
    }
  }, [cardList.length]);

  const addCards = async () => {
    const userResponse = await fetchUsers();

    const weatherResponse = await fetchWeather(userResponse.results);

    const arr = userResponse.results.map((user, index) => ({
      user,
      weather: weatherResponse[index],
    }));

    setCardList((prev) => [...prev, ...arr]);
  };

  // console.log('cardList ==>> ', cardList)
  return (
    <>
      <h1>MainPage</h1>
      {cardList.length !== 0 ? (
        <>
          <CardList cards={cardList} />
          <Button onClick={addCards} variant="outlined">Outlined</Button>
        </>
      ) : (
        <Loader />
      )}
      {/* <Loader /> */}
      {/* <LoadingIndicator /> */}
    </>
  );
};

export default MainPage;
