const getDates = (date) => {
  const arr = [];
  const originalDate = new Date(date);
  const newDate = new Date(originalDate);
  for (let i = 0; i < 7; i++) {
    newDate.setDate(originalDate.getDate() + i);

    const formattedDate = newDate.toISOString().split("T")[0];
    arr.push(formattedDate);
  }

  return arr;
};

export default getDates
