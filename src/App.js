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
          
        </Routes>
      </div>
    </Router>
    )
}

export default App

