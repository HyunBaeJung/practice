import React, { useState,useEffect } from 'react'
import "./Nav.css";

export default function Nav() {

    const [show, setShow] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", ()=>{
        if(window.screenY>50){
            setShow(true);
        }else{
            setShow(false);
        }
      })
    
      return () => {
        window.removeEventListener("scroll",()=>{});
      }
    })
    

  return (
    <nav className={`nav ${show && "nav__black"}`}> 
        <img
            alt='Netflix logo'
            src='https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456'
            className='nav__logo'
            onClick={()=> window.location.reload()}
        />
        <img
            alt='User logged'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            className='nav__avatar'
        />
    </nav>
  )
}
