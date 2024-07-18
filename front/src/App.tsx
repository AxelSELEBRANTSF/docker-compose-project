import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>
        Menu
      </h1>
      <Link to={"/create_user"}>Création d'utilisateur</Link>
      <Link to={"/list_user"}>Liste des utilisateurs</Link>
    </>
  )
}

export default App
