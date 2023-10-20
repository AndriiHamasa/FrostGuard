import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import CardItem from '../CardItem/CardItem';

const CardList = ({ cards }) => {
  // console.log('cards', cards)
  return (
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item key={card.user.email} xs={12} sm={6} md={4} lg={3}>
          {/* Здесь CardComponent - ваш компонент для карточки */}
          <CardItem data={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()),
};
