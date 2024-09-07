import Button from "./Button/Button";
import Modal from "./modal/Modal";
import { useEffect, useState, useCallback } from "react";
import useInput from "../Hooks/useInput";

const EffectSection = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const input = useInput();

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <h3>Effect section</h3>
      <Button onClick={() => setModal(true)}>Открыть инфо</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <Button onClick={() => setModal(false)}>Close</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />

          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </>
  );
};
export default EffectSection;