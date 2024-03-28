import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Login from './components/Logincomponent/Login';
import Nav from './components/Navcomponent/Nav';
import Home from './pages/homepage/Home';
import { BrowserRouter, Route,   Routes ,Link } from 'react-router-dom';
import Signup from './components/Signupcomponent/Signup';


function App() {
  return (
   <>
    {/* <Home /> */}
    <BrowserRouter>
    <div>
    <Nav /> 
     
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>
    </div>
     
    </BrowserRouter>
   
   {/* <Login /> */}
   </>
  );
}

export default App;
