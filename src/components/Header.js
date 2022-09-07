import React from 'react'
import clock from "../assets/clock.jpg"
import "./styles/Header.module.css"

function Header() {
  return (
    <header>
        <div>
            <h2>New to Udemy? Lucky you.</h2>
            <p>
                Courses start at E£169.99. Get your new-student offer now before it
                expires.
            </p>
        </div>
        <img src={clock} alt="A clock" />
    </header>

  )
}

export default Header