import { useSelector } from 'react-redux/';
import { Route, Routes } from 'react-router-dom'
import Register from './Views/Register';
import Login from './Views/Login';
import Home from './Views/Home';
import Contacts from './Views/Contacts';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './Views/UserMenu'
import authSelectors from '../Redux/auth/auth-selectors'

// import Loader from './Loader';
// import { lazy, Suspense } from 'react'
// const Navigation = lazy(() => import('./Navigation'))
// const Register = lazy(() => import('./Views/Register'))
// const Login = lazy(() => import('./Views/Login'))
// const Home = lazy(() => import('./Views/Home'))
// const Contacts = lazy(() => import('./Views/Contacts'))
// const Loader = lazy(() => import('./Loader'))


function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  console.log(isLoggedIn)

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      
      <main className="main">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contacts" element={<Contacts />}  />
            <Route path="/register" element={<Register />}  />
            <Route path="/login" element={<Login />}  />
          </Routes>
      </main>
    </div>
  );
}

export default App;
