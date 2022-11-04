import React from 'react';


function Footer() {
    const currentYr = new Date().getFullYear();

    return <footer> 
    <p>copyright © {currentYr}</p>
    </footer>
}

export default Footer;