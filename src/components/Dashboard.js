import { useState } from "react"
import { Home } from "./Home";
import { Tasks } from "./Tasks";
import { User } from "./User";

export const Dashboard = (props) => {

    const {setAuthorized} = props
    const [activePage, setActivePage] = useState('Home');

    return (
    <div class="container"> 
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#" onClick={()=>{
                    setActivePage('Home')
                  }}>Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={() => {setActivePage('Tasks')}}>Tasks</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#" onClick={() => {
                    setActivePage('User')
                  }}>User</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>  

      <div class="row">
        <div class="col-12">
        {activePage === 'Home' ? <Home /> : activePage === 'Tasks' ? <Tasks/> : activePage === 'User' ? <User setAuthorized={setAuthorized} /> : ''}          
        </div>
      </div>
    </div>

    )
}