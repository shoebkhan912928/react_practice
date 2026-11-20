import { useEffect, useState } from "react";
import axios from "axios";

export const Fetchdata = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("https://randomuser.me/api/?results=10");
        setUsers(response.data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h2>{error}</h2>;

  return (
    <>
      <h1>List of users</h1>
      {users.map((u) => (
        <h3 key={u.login.uuid}>
          {u.name.first} {u.name.last}
        </h3>
      ))}
    </>
  );
};