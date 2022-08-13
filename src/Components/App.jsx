import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom'
import Register from './Views/Register';
import Login from './Views/Login';
import Home from './Views/Home';
import Contacts from './Views/Contacts';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './Views/UserMenu'
import authSelectors from '../Redux/auth/auth-selectors'
import Warning from "./Warning"
import authOperations from '../Redux/auth/auth-operations';


function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  console.log(isLoggedIn)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

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
            <Route path="/contacts" element={isLoggedIn ? <Contacts /> : <Warning />}  />
            <Route path="/register" element={<Register />}  />
            <Route path="/login" element={<Login />}  />
          </Routes>
      </main>
    </div>
  );
}

export default App;
