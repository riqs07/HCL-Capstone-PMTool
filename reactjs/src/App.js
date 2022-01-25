import React from 'react'

import Dashboard from './components/Dashboard'
import Header from './components/Layout/Header'
import AddProject from './components/Project/AddProject'
import UpdateProject from './components/Project/UpdateProject'

import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

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
              <Route  path="/dashboard" element={<Dashboard />} />
              <Route  path="/addProject" element={<AddProject />} />
              <Route path="/updateProject/:id" element={<UpdateProject />} />

            </Routes>

          </header>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
