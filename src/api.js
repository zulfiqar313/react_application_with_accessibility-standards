import axios from "axios";

export async function fetchUsers() {
  const usersDetailsAPI = "https://reqres.in/api/users";

  try {
    const response = await axios.get(usersDetailsAPI);
    const { data: { data = {} } = {} } = response;

    return data;
  } catch (err) {
    throw err;
  }
}
