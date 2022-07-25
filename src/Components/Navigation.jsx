import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav className="nav">
            <ul className="nav-list__global">
                <li className="nav-item__global"><Link to="/">Главная</Link></li>
                <li className="nav-item__global"><Link to="/contacts">Мои контакты</Link></li>
            </ul>
            <ul className="nav-list__signup"> 
                <li className="nav-item__signup"><Link to="/register">Регистрация</Link></li>
                <li className="nav-item__signup"><Link to="/login">Войти</Link></li>
            </ul>        
            <ul className="nav-list__user">
                <li className="nav-item__user">Добро пожаловать</li>
                <li className="nav-item__user"><button type="button">Выйти</button></li>
            </ul>        
        </nav>
    )
}

export default Navigation