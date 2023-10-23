import { useEffect, useState } from "react";
import fetchUsers from "../../assets/fetchUsers";
import fetchWeather from "../../assets/fetchWeather";
import CardList from "../../shared/components/CardList/CardList";
import Loader from "../../shared/components/Loader/Loader";
import LoadingButton from '@mui/lab/LoadingButton';
import css from "./MainPage.module.css";

const MainPage = () => {
  const [cardList, setCardList] = useState([]);
  const [loading, setLoading] = useState(false);

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
    setLoading(true)
    const userResponse = await fetchUsers();

    const weatherResponse = await fetchWeather(userResponse.results);

    const arr = userResponse.results.map((user, index) => ({
      user,
      weather: weatherResponse[index],
    }));

    setCardList((prev) => [...prev, ...arr]);
    setLoading(false)
  };

  return (
    <>
      {cardList.length !== 0 ? (
        <>
          <div className={css.container}>
            <CardList cards={cardList} type="home" />
          </div>
          <div className={css.loadMoreBtn}>
            <LoadingButton
              size="small"
              onClick={addCards}
              loading={loading}
              loadingIndicator="Loading…"
              variant="outlined"
            >
              <span>Load more</span>
            </LoadingButton>
          </div>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default MainPage;
