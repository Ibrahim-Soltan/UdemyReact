import React from 'react'
import NavBarCSS from "./styles/NavBar.module.css"
import logo from "../assets/logo-udemy.png"
import {Link} from "react-router-dom"

function SearchBar(){
    return (
        <form>
        <button type="submit">
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </button>
        <input
          className={NavBarCSS.searchbar}
          type="text"
          placeholder="Search for anything"
        />
      </form>
    )
}

function SmallscreenIcons(){
    return (
        <span id={NavBarCSS.smallscreenIcons}>
        <button>
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </button>
        <button>
          <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
        </button>
      </span>  
    )
}


function Logo(){
  return (
      <img src={logo} className={NavBarCSS.logo} alt="Udemy Logo" />
  )
}



function NavBar() {
  return (
    <nav>
      <button id={NavBarCSS.smallscreenMenu}>
        <i className="fa fa-bars fa-lg" aria-hidden="true"></i>
      </button>
      <Link to="/">
        <Logo />
      </Link>
      <button>Categories</button>
      <SearchBar />
      <button id={NavBarCSS.udemyBusiness}>Udemy Business</button>
      <button id={NavBarCSS.udemyTeach}>Teach on Udemy</button>
      <button>
        <i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
      </button>
      <button className={NavBarCSS.login}>Log in</button>
      <button className={NavBarCSS.signup}>Sign up</button>
      <button className={NavBarCSS.language}>
        <i className="fa fa-globe fa-lg" aria-hidden="true"></i>
      </button>
      <SmallscreenIcons />
    </nav>
  )
}

export default NavBar