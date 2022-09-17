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
import authOperations from '../Redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

function App() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser)
  console.log(isLoggedIn)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])

  return (!isFetchingCurrentUser && (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </header>
      
      
      <main className="main">
        <Routes>
         
            {/* <Route exact path="/" element={<Home />}  />
            <Route  path="/register" element={<Register />}  />
            <Route  path="/login" element={<Login />} /> */}
            {/* <Route path="/contacts" element={<Contacts />}  /> */}
             
            
          
            <Route exact path="/" element={
                <PublicRoute>
                  <Home />
                </PublicRoute>
                }
            />
            
            <Route exact path="/register"  element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
                } 
            />
            
            <Route exact path="/login"  element={
                <PublicRoute restricted>
                  <Login />
                </PublicRoute>
                } 
            />

            <Route exact path="/contacts" element={
                <PrivateRoute >
                  <Contacts />
                </PrivateRoute>
                }
            />
          </Routes>
      </main>
    </div>
  ))
}

export default App;
