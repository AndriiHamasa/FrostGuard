const removeFromLocal = (userMail) => {
  const dataInLocal = JSON.parse(localStorage.getItem('users'))
  const arr = []
  for (let i = 0; i < dataInLocal.length; i++) {
    if (dataInLocal[i].user.email === userMail) {
      continue
    }

    arr.push(dataInLocal[i])
  }
  
  localStorage.setItem('users', JSON.stringify(arr))
}

export default removeFromLocal