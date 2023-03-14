import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css"

function Navbar(props) {
    const [showNavbar, setShowNavbar] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            setShowNavbar(true);
        }
        else {
            setShowNavbar(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar);
        return () => window.removeEventListener('scroll', transitionNavbar);
    }, []);

    return (
        <div className={`${classes.nav} ${showNavbar && classes.nav_black}`}>
            <div className={classes.nav_content}>
                <img 
                    className={classes.nav_logo} 
                    alt="Netflix" 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" 
                />
                <img 
                    className={classes.nav_avatar} 
                    alt="avatar" 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                />
            </div>
        </div>
    );
}

export default Navbar;