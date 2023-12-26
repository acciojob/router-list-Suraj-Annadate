
import React from "react";
import './../styles/App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Item1 from "./list/Item1";
import Item2 from "./list/Item2";
import Item3 from "./list/Item3";
import Navbar from "./Navbar";

const App = () => {
  return (
    <BrowserRouter>
    <h1>Item List</h1>
      <Navbar/>
        <Routes>
           <Route path="/item1" element={<Item1/>}></Route>
           <Route path="/item2" element={<Item2/>}></Route>
           <Route path="/item3" element={<Item3/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App;
