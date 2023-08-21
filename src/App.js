import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Landing } from './pages/Landing';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
        <Landing />
      <Footer />
    </div>
  );
}

export default App;
