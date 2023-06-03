import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className="nav">
      <div className="container">
        <div className="row">
            <div className="col-md-6" id="logo">
                <h1>Blog</h1>
            </div>
            <div className="col-md-6">
                <ul id="list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/signUp">SignUp</NavLink></li>
                    <li><NavLink to="/logIn">LogIn</NavLink></li>
                    <li><NavLink to="/addCategory">AddCategory</NavLink></li>
                    <li><NavLink to="/displayAllCategory">DisplayAllCategory</NavLink></li>
                    <li><NavLink to="/addBlog">AddBlog</NavLink></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
    <main>
      <Outlet/>
    </main>
    </>
  )
}

export default Nav;