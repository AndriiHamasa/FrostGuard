import axios from "axios";

const instanceUser = axios.create({
  baseURL: `https://randomuser.me/api`,
});

export default instanceUser;
