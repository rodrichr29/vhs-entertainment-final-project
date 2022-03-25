import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Movie from './Pages/Movie';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className='Container'>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/catalog" element={<Catalog/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/movie" element={<Movie/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
