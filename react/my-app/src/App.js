import React from 'react'
import AllFiles from './components/AllFiles';
import File from './components/File';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Info from './components/Info';
import Show from './components/Show';
import Rename from './components/Rename';
import Delete from './components/Delete';
import Copy from './components/Copy';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<AllFiles />} ></Route>
          <Route path='/:a' element={<File />}>
          <Route path='/:a/info' element={<Info />}/>
          <Route path='/:a/show' element={<Show />}/>
          <Route path='/:a/rename' element={<Rename />}/>
          <Route path='/:a/delete' element={<Delete />}/>
          <Route path='/:a/copy' element={<Copy />}/>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
