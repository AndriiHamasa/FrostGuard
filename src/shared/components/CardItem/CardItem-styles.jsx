import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    // flexWrap: "wrap",
    justifyContent: "space-between",
  },
  subCardName: {
    width: "50%",
  },
  cardContent: {
    flex: "1",
  },
  avatar: {


    // width: "30%",
    marginTop: "16px",
    marginRight: "16px",
    
    // width: "0px", // Установите желаемый размер аватарки
    // height: "100px",
    //   marginLeft: 'auto', // Сдвигает аватарку вправо
  },
}));

export default useStyles;
