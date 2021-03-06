import React from 'react'

import Dashboard from './components/Dashboard'
import Header from './components/Layout/Header'
import AddProject from './components/Project/AddProject'
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route , useNavigate } from 'react-router-dom'

import { Provider } from "react-redux"
import store from "./store"

function App() {


  return (
    <Provider store = {store}>

      <Router>

        <div className="App">
          <header className="App-header">
            <Header />
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
    
              <Route exact path="/addProject" element={<AddProject />} />
            </Routes>

          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
