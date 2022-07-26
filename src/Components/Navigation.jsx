import { Link } from 'react-router-dom'


const Navigation = () => {
    return (
            <ul className="nav-list__global">
                <li className="nav-item__global"><Link to="/">Главная</Link></li>
                <li className="nav-item__global"><Link to="/contacts">Мои контакты</Link></li>
            </ul>
    )
}

export default Navigation