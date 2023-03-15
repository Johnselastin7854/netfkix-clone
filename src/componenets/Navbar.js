import React, {useState, useEffect} from "react";
import "./Navbar.css";


function Navbar(){
    const [show, handleshow] = useState(false);
    
    function showNav(){
        if (window.scrollY > 100) {
            handleshow(true)
          } else {
              handleshow(false)
          }
    }

    useEffect(() => {
      window.addEventListener("scroll",showNav);
      return () => {
        window.removeEventListener("scroll",showNav);
      }
    }, []);

    return(
        <nav className={`nav ${show && "nav__black"}`}>
             <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />

        </nav>
    )
}
export default Navbar;