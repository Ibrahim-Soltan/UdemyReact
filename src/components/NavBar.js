import React, { useRef } from 'react'
import NavBarCSS from "./styles/NavBar.module.css"
import logo from "../assets/logo-udemy.png"
import {Link, useSearchParams,useNavigate} from "react-router-dom"

function SearchBar(){
  const inputRef = useRef(null);
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const handleSearch = ()=>{
    navigate("/search/");
    setSearch({search:inputRef.current.value});
    navigate({
      pathname: "/search/",
      search: `?search=${inputRef.current.value}`,
    }); 
  }
    return (
        <form>
        <button type="submit" onClick={(event)=>{
          event.preventDefault();
          if(inputRef.current.value && inputRef.current.value!==search.get("search"))handleSearch();
        }}>
          <i className="fa fa-search fa-lg" aria-hidden="true"></i>
        </button>
        <input ref = {inputRef}
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