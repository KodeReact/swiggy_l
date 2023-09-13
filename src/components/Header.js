import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{

    const [btnName,setBtnName]=useState("login");

    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="" />
            <div className="nav_bar">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button onClick={()=>{btnName==='login'?setBtnName('logout'):setBtnName('login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;