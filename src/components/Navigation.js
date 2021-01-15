import React from 'react'
import './css/navigation.css'

function Navigation() {
    return (
        <nav>
            <a href="#" onClick={() =>{console.log("Acceuil")}}>link 1</a>
            <a href="#" onMouseOver={() =>{console.log("Galerie")}}>link 2</a>
            <a href="#" onDoubleClick={() =>{console.log("Contact")}}>link 3</a>
        </nav>
    )
}

export default Navigation
