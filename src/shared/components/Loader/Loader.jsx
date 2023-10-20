import { CircularProgress } from '@material-ui/core';
import css from "./Loader.module.css"

const Loader = () => {
  return <div className={css.container}><CircularProgress  size={30} /></div>;
};

export default Loader;