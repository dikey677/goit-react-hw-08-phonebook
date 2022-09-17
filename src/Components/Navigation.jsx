import { Link } from 'react-router-dom'
import { useSelector } from "react-redux"
import authSelectors from "../Redux/auth/auth-selectors"


const Navigation = () => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
            <ul className="nav-list__global">
                <li className="nav-item__global"><Link to="/">Главная</Link></li>
                {isLoggedIn &&  <li className="nav-item__global"><Link to="/contacts">Мои контакты</Link></li>}
            </ul>
    )
}

export default Navigation