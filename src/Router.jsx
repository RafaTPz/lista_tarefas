import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

const Rotas = () => {
    return(
    <Routes>
        <Route path="/" element={<Home/>}></Route>
    </Routes>
    );

}





export default Rotas;