import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Counter } from './features/counter/counter';
import LoginPage from './features/auth/login-page';
import createStore from 'react-auth-kit/createStore';
import AuthProvider from 'react-auth-kit';
import ContactPage from './features/contact-page';

function App() {
  const [count, setCount] = useState(0);
  const userStore = createStore({
    authName: '_auth',
    authType: 'cookie',
    cookieDomain: window.location.hostname,
    cookieSecure: window.location.protocol === 'https:',
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h2 className="read-the-docs">
        POC Bifrost
      </h2>
      <AuthProvider store={userStore}>
        <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/login">Connexion</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
