import './App.css';

import Dashboard from './components/Dashboard'
import Header from './components/Layout/Header'
import AddProject from './components/Project/AddProject'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
          <Route exact path ="/dashboard" element = {<Dashboard/>}/>

          <Route exact path ="/addProject" element = {<AddProject/>}/>
          </Routes>

        </header>
      </div>
    </Router>
  );
}

export default App;
