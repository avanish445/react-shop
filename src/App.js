import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Routers from './route/Routers';
import { useEffect, useState } from 'react';
import { userData, useUserContext } from './context/UserContext';

const App = () => {
  const [isUser, setIsUser] = useState(false)
  const { setUser } = useUserContext()
  useEffect(() => {
    const userJsonString = window.localStorage.getItem('user')
    if (userJsonString) {
      const userJson = JSON.parse(userJsonString);
      setUser(userJson);
      setIsUser(userJson && userJson.userName === userData.userName && userJson.password === userData.password);
    }
  }, [])
  return (
    <div>
      <Header isUser={isUser} />
      <div className='main-container'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
