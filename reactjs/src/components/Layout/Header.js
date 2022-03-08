import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-slate-700 mb-4 ">
        <div className="container">
            <a className="navbar-brand " href="/dashboard">
            <i class="fas fa-house-user"></i>            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">

                <ul className="navbar-nav ml-auto text-sm ">
                    <li className="nav-item  bg-slate-800 rounded-lg mx-2">
                        <a className="nav-link  " href="register.html">
                        <i class="fas fa-user-plus"></i> Sign Up                 </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-slate-800 rounded-lg mx-2" href="login.html">
                        <i class="fas fa-sign-in-alt "></i>  Sign in  
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    )
}
