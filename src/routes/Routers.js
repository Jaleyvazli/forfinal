import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Reservation } from '../pages/Reservation';


const Routers = () => {
  return (
    
<Routes>
    <Route path='/' element={ <Navigate to = "/home"/>} />
    <Route path='/home' element={<Home />} />
    <Route path='/allfoods' element={<AllFoods />} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/reservation' element={<Reservation />} />
</Routes>

     
  )
}

export default Routers;