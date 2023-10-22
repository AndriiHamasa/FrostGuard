import { Box, Modal, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import ModalCard from "../ModalCard/ModalCard";
import getDates from "../../../helpers/getDates";

// import { useState } from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70vw",
  maxWidth: "500px",
  height: "35vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ handleClose, open, modalData }) => {
  const [value, setValue] = useState(0);

  const date = modalData.weather.current_weather.time.split("T")[0];
  const dates = getDates(date);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  // const style = {
  //   maxWidth: { xs: 320, sm: 480 },
  //   bgcolor: "background.paper",
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%, -50%)",
  //   width: 400,
  //   border: "2px solid #000",
  //   boxShadow: 24,
  //   p: 4,
  // }

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons
            allowScrollButtonsMobile
            aria-label="scrollable force tabs example"
          >
            <Tab label={dates[0]} value={0}/>
            <Tab label={dates[1]} value={1}/>
            <Tab label={dates[2]} value={2}/>
            <Tab label={dates[3]} value={3}/>
            <Tab label={dates[4]} value={4}/>
            <Tab label={dates[5]} value={5}/>
            <Tab label={dates[6]} value={6}/>
          </Tabs>
          <ModalCard data={modalData} day={value} />
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;

BasicModal.propTypes = {
  open: PropTypes.bool,
  modalData: PropTypes.shape(),
  handleClose: PropTypes.func.isRequired,
};
