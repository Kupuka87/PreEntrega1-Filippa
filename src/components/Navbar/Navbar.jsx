import React from "react";
import Cartwidget from "../Cartwidget/Carwidget";


export const Navbar = () => {
    return (
        <div className="container">
            <div className="nav">
                <div className="nav_brand">
                    <a href="nav_link">QueSeaCIMA</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a href="nav_link">Nosotros</a>
                    </li>
                </ul>
                <ul className="nav_list">
                    <li>
                        <a href="nav_link">Guías</a>
                    </li>
                </ul>
                <ul className="nav_list">
                    <li>
                        <a href="nav_link">Vías</a>
                    </li>
                </ul>
                <ul className="nav_list">
                    <li>
                        <a href="nav_link">Contacto</a>
                    </li>
                </ul>
                <ul className="nav_list">
                    <li>
                        <a href="nav_link">
                            <Cartwidget/>
                        </a>
                    </li>
                </ul>

            </div>
        </div>
        
    )
}

export default Navbar