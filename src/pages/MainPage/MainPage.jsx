import { useEffect, useState } from "react";
import fetchUsers from "../../assets/fetchUsers";
import fetchWeather from "../../assets/fetchWeather";
import CardList from "../../shared/components/CardList/CardList";
import Loader from "../../shared/components/Loader/Loader";
import Button from "@mui/material/Button";
import css from "./MainPage.module.css"

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

  return (
    <>
      {cardList.length !== 0 ? (
        <>
          <div className={css.container}><CardList cards={cardList} type="home" /></div>
          <div className={css.loadMoreBtn}><Button onClick={addCards} variant="outlined">Load more</Button></div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MainPage;
