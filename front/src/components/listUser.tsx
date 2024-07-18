import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type User = {
    id: number,
    username: string,
    email: string
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

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
    const user = users.find(user => user.id === id);
    if (user) {
      setEditingUser(user);
      setIsEditing(true);
    }
  };

  const handleSaveUser = async () => {
    if (editingUser) {
      try {
        const response = await fetch(`http://127.0.0.1:3333/users/${editingUser.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(editingUser),
        });
        if (response.ok) {
          const updatedUser = await response.json();
          setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
          setIsEditing(false);
          setEditingUser(null);
          console.log(`User with id ${editingUser.id} updated successfully`);
        } else {
          console.error(`Failed to update user with id ${editingUser.id}:`, response.statusText);
        }
      } catch (error) {
        console.error(`Error updating user with id ${editingUser.id}:`, error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editingUser) {
      setEditingUser({ ...editingUser, [e.target.name]: e.target.value });
    }
  };

  return (
    <div>
      <Link to={"/create_user"}>Crée un utilisateur</Link>
      <h2>Liste des Utilisateurs</h2>
      {isEditing && editingUser && (
        <div>
          <h3>Modifier l'utilisateur</h3>
          <label>
            Pseudo:
            <input type="text" name="username" value={editingUser.username} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={editingUser.email} onChange={handleChange} />
          </label>
          <button onClick={handleSaveUser}>Save</button>
          <button onClick={() => { setIsEditing(false); setEditingUser(null); }}>Cancel</button>
        </div>
      )}
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
