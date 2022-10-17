import React from "react";
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import List from "./container/List";


const App = () =>{
    return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<List/>}>
         
          </Route>
          <Route path="/add" element={<h1>Add user</h1>}>
          
          </Route>
          <Route path="/edit" element={ <h1>Edit user</h1>}>
           
          </Route>
        </Routes>
      </div>
    </Router>
    )
}

export default App

