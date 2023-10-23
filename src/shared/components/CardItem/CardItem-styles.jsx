import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
  subCardName: {
    width: "50%",
  },
  cardContent: {
    flex: "1",
  },
  avatar: {
    marginTop: "16px",
    marginRight: "16px",
  },
}));

export default useStyles;
