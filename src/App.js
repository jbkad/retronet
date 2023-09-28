import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ThemeContext } from './components/ThemeToggle';
import { useContext } from 'react';
import './App.css';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <div className='container'>
          <Navbar />
          <Home />
          <Footer />
      </div>
    </div>
  );
}

export default App;
