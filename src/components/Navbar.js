import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return (
        <div>
            <ul>
                <li><Link to="/item1">Item1</Link></li>
                <li><Link to="/item2">Item2</Link></li>
                <li><Link to="/item3">Item3</Link></li>
            </ul>
        </div>
    )
}


export default Navbar;