import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Detail from './components/Detail';

const App = () => {
    return(
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/Detail" element={<Detail/>}/>
      </Routes>
      </BrowserRouter>
      </>
    )
};

export default App;