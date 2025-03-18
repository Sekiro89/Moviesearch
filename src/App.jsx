import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import './css/App.css'
import { MovieProvider } from './components/Contexts/MovieContext';


function App() {
  return (
    <div>
      <MovieProvider>
      <Navbar />
      <main className='main-component'>
        <Routes>
          <Route path="/"element={<Home />}/>
          <Route path="/Favorites" element={<Favorites/>}/>
        </Routes>
      </main>
      </MovieProvider>
    </div>
   
  );
}

export default App
