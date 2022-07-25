import { Link } from 'react-router-dom'
import UserMenu from './Views/UserMenu'
// import { lazy, Suspense } from 'react'
// const UserMenu = lazy(() => import('./Views/UserMenu'))
// const Loader = lazy(() => import('./Loader'))

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
            {/* <Suspense fallback={<Loader/>}> */}
                <UserMenu />
            {/* </Suspense> */}
        </nav>
    )
}

export default Navigation