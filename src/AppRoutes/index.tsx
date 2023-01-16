import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRecados from '../pages/HomeRecados';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomeRecados />}/>
                <Route path='/signup' element={<Signup />}/>
                <Route path='/' element={<Login />}/>
            </Routes>
        </BrowserRouter>
    )
}

export {AppRoutes};