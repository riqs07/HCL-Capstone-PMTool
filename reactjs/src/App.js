import React from 'react'

import Dashboard from './components/Dashboard'
import Header from './components/Layout/Header'
import AddProject from './components/Project/AddProject'
import UpdateProject from './components/Project/UpdateProject'

import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux"
import store from "./store"
import AddProjectTask from './components/projectBoard/tasks/AddProjectTask';
import ProjectBoard from './components/projectBoard/ProjectBoard'
import UpdateTask from "./components/projectBoard/tasks/UpdateProjectTask";


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
                <Route exact path="/projectBoard/:id" element={<ProjectBoard/>} />
                
                <Route exact path = "/addProjectTask/:id" element = {<AddProjectTask/>}/>
              <Route exact path = "/updateTask/:id/:pt_id" element = {<UpdateTask/>}/>


            </Routes>

          </header>
           </div>
      </Router>
    </Provider>
  );
}

export default App;
