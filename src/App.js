import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';

function App() {
  const navlinks = [
    {herf: '/', text: 'Home'},
    {herf: '/services', text: 'Services'},
    {herf: '/products', text: 'Products'},
    {herf: '/sign-up', text: 'Sign Up'},
  ]
  return (
    <Router>
        <Navbar  links={navlinks} />
        <Routes>
          <Route path="/" excact element={<Home />} />
          <Route path='/Products' element={<Products /> } />
          <Route path='/services' element={<Services />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
