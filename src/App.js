import logo from './logo.svg';
import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Routers from './route/Routers';

function App() {
  return (
    <div>
      <Header />
      <div className='main-container'>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

export default App;
