const saveToLocal = (user) => {
  const isInLocal = localStorage.getItem("users");
  if (!isInLocal) {
    localStorage.setItem("users", JSON.stringify([user]));
  } else {
    const prevUsers = JSON.parse(localStorage.getItem("users"));
    const updatedUsers = [...prevUsers, user];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  }
};

export default saveToLocal;
