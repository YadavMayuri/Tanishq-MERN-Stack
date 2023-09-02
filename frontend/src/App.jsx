import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import { useContext} from 'react';
import { AuthContext } from './Context/AuthContext';
import AddProduct from './Components/AddProduct';
import MultipleProduct from './Components/MultipleProduct';
import SingleProduct from './Components/SingleProduct';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const { state } = useContext(AuthContext);
  console.log(state,"state from context")
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/addProduct' element={<AddProduct/>}/>
        <Route exact path='/MultipleProduct' element={<MultipleProduct/>}/>
        <Route exact path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/navbar' element={<Navbar/>}/>
        <Route exact path='/footer' element={<Footer/>}/>


      </Routes>
     
    </div>
  );
}

export default App;
