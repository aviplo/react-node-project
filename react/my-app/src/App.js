import React from 'react'
import AllFiles from './components/AllFiles';
import File from './components/File';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from './components/Info';




function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<AllFiles />} ></Route>
          <Route path='/a.html' element={<File />}>
          <Route path='/a.html/info' element={<Info />}/>
          
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
