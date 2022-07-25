import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
const Navigation = lazy(() => import('./Navigation'))
const Register = lazy(() => import('./Views/Register'))
const Login = lazy(() => import('./Views/Login'))
const Home = lazy(() => import('./Views/Home'))
const Contacts = lazy(() => import('./Views/Contacts'))
const Loader = lazy(() => import('./Loader'))

function App() {
  return (
    <div className="app">
      <header className="header">
        <Navigation />
      </header>
      <main className="main">
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contacts" element={<Contacts />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="/login" element={<Login />} exact />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
