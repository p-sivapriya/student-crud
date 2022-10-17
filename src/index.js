import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { Provider } from "react-redux";
import store from "./store"
import 'bootstrap/dist/css/bootstrap.css'

createRoot(document.getElementById('root')).render(<Provider store={store}><App /></Provider>);