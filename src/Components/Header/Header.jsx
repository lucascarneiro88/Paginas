import { NavLink, useNavigate, useLocation } from "react-router-dom"
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const location = useLocation();

  const handleLogout = () => {
    navigate('/login');
  }
  return (
    <nav className="menu-nav">
      <ul>
        <li className="active"><NavLink to="/" >Home</NavLink></li>
        <li ><NavLink to="login">Login</NavLink></li>
        <li ><NavLink to="perfil">Perfil</NavLink></li>
        <li ><NavLink to="contato">Contato</NavLink></li>
        <li >
          <button className="nav-btn" onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
