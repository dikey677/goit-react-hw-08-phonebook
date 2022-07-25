import { Route, Routes } from 'react-router-dom'
import { useTransition } from "react";
import Navigation from './Navigation';
import Register from './Views/Register';
import Login from './Views/Login';
import Home from './Views/Home';
import Contacts from './Views/Contacts';
import Loader from './Loader';

// import { lazy, Suspense } from 'react'
// const Navigation = lazy(() => import('./Navigation'))
// const Register = lazy(() => import('./Views/Register'))
// const Login = lazy(() => import('./Views/Login'))
// const Home = lazy(() => import('./Views/Home'))
// const Contacts = lazy(() => import('./Views/Contacts'))
// const Loader = lazy(() => import('./Loader'))


function App() {
 const [isPending, startTransition] = useTransition()
  return (
    <div className="app">
        {isPending && <Loader/>}
        <header className="header">
          <Navigation />
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
