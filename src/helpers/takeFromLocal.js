const takeFromLocal = (key) => {
  const arrFromLocal = JSON.parse(localStorage.getItem(key))

  return arrFromLocal
}

export default takeFromLocal