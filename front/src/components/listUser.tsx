import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type User = {
    id: number,
    username: string,
    email: string
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3333/users');
      if (response.ok) {
        const data = await response.json();
        setUsers(data); // Update state with fetched users array
      } else {
        console.error('Failed to fetch users:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      const response = await fetch(`http://127.0.0.1:3333/users/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Remove deleted user from state
        setUsers(users.filter(user => user.id !== id));
        console.log(`User with id ${id} deleted successfully`);
      } else {
        console.error(`Failed to delete user with id ${id}:`, response.statusText);
      }
    } catch (error) {
      console.error(`Error deleting user with id ${id}:`, error);
    }
  };

    const handleModifyUser = async (id: number) => {
        // Implement modification logic as needed
        console.log(`Modify user with id ${id}`);
    };

  return (
    <div>
        <Link to={"/create_user"}>Crée un utilisateur</Link>
      <h2>Liste des Utilisateurs</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Pseudo</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleModifyUser(user.id)}>Modifier</button>
                <button onClick={() => handleDeleteUser(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
