import instanceUser from "../shared/api/instance-user"

const fetchUsers = async (countOfUsers = 8) => {
  try {
    const response = await instanceUser.get(`?results=${countOfUsers}`)

    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

export default fetchUsers