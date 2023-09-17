import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{

    const [btnName,setBtnName]=useState("login");

    return(
        <div className="w-full bg-[#aaa] py-3 px-32 mb-6 flex justify-between items-center">
            <Link to="/"><img className="w-16 mr-5" src={LOGO_URL} alt="" /></Link>
            <div className="nav_bar">
                <ul className="flex justify-between items-center">
                    <li className="text-[#02060cbf] font-bold text-lg m-2"><Link to="/">Home</Link></li>
                    <li className="text-[#02060cbf] font-bold text-lg m-2"><Link to="/about">About us</Link></li>
                    <li className="text-[#02060cbf] font-bold text-lg m-2"><Link to='/contact'>Contact</Link></li>
                    <li className="text-[#02060cbf] font-bold text-lg m-2"><Link>Cart</Link></li>
                    <button className="p-2 border border-[#02060c99] rounded-lg m-3 cursor-pointer" onClick={()=>{btnName==='login'?setBtnName('logout'):setBtnName('login')}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;