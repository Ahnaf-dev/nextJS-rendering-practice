const apiConfig: {
  baseURL: string;
} = {
  baseURL: "https://jsonplaceholder.typicode.com/users",
};

async function fetchUsers() {
  const response = await fetch(apiConfig.baseURL);
  const data = await response.json();

  const users = data.map((user: any) => {
    const { email, phone, name } = user;

    return {
      email,
      phone,
      name,
    };
  });

  return users;
}

export default fetchUsers;
