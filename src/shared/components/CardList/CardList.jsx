import { Grid } from '@material-ui/core';
import PropTypes from "prop-types";
import CardItem from '../CardItem/CardItem';
import { useState } from 'react';
import BasicModal from '../Modal/Modal';
// import BasicModal from '../Modal/Modal';

const CardList = ({ cards }) => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null)
  const handleOpen = (data) => {
    setModalData(data)
    setOpen(true)
  };
  const handleClose = () => setOpen(false);

  return (
    <>
    <Grid container spacing={2}>
      {cards.map((card) => (
        <Grid item key={card.user.email} xs={12} sm={6} md={4} lg={3}>
          {/* Здесь CardComponent - ваш компонент для карточки */}
          <CardItem data={card} openModal={handleOpen} />
        </Grid>
      ))}
      </Grid>
      {open && <BasicModal open={open} handleClose={handleClose} modalData={modalData} />}
    </>
  );
};

export default CardList;

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()),
};
