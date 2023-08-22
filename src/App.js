import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';
import { useContext } from 'react';
import { ThemeContext } from './components/ThemeToggle';
import './App.css';

function App() {

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className='app__container'>
          <Navbar />
          <Landing />
          <Footer />
      </div>
    </div>
  );
}

export default App;
