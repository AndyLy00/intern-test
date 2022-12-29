import React from 'react';
import {Route, Routes} from "react-router";
import {MainPage} from './components/MainPage'
import {Filter} from './components/Filter'
import {Add} from './components/Add'

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>}>
          <Route path="filter" element={<Filter/>}/>
          <Route path="add" element={<Add/>}/>
        </Route>
      </Routes>
  );
}

export default App;
