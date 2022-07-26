import { Link } from 'react-router-dom'

const AuthNav = () => {
    return (
        <div>
            <ul className="nav-list__signup"> 
                <li className="nav-item__signup"><Link to="/register">Регистрация</Link></li>
                <li className="nav-item__signup"><Link to="/login">Войти</Link></li>
            </ul>
        </div>
    )
}

export default AuthNav