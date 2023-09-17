import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnName,setBtnName]=useState("login");

    return(
        <div className="header">
            <Link to="/"><img className="logo" src={LOGO_URL} alt="" /></Link>
            <div className="nav_bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link>Cart</Link></li>
                    <button onClick={()=>{btnName==='login'?setBtnName('logout'):setBtnName('login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;