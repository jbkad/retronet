import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';
import { ThemeContext } from './components/ThemeToggle';
import { useContext } from 'react';
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
