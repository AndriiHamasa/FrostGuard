import css from "./SavedPage.module.css";
import { useEffect, useState } from "react";
import takeFromLocal from "../../helpers/takeFromLocal";
import removeFromLocal from "../../helpers/removeFromLocal";
import CardList from "../../shared/components/CardList/CardList";

const SavedPage = () => {
  const [localCardList, setLocalCardList] = useState([]);

  const isInLocal = takeFromLocal("users");

  useEffect(() => {
    if (isInLocal?.length > 0 && isInLocal.length !== localCardList.length) {
      setLocalCardList(isInLocal);
    }
  }, [isInLocal, localCardList.length]);

  const deleteCard = (mail) => {
    removeFromLocal(mail);
    setLocalCardList(takeFromLocal('users'))
  };


  return (
    <div>
      
      {localCardList.length === 0 ? (
        <img
          className={css.noCardsImg}
          src="./pictures/add_weather.jpg"
          alt="you should add some cards"
        />
      ) : (
        <CardList cards={localCardList} type="saved" deleteCard={deleteCard} />
      )}
    </div>
  );
};

export default SavedPage;

