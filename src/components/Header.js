import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return(
        <div className="header">
            <img className="logo" src={LOGO_URL} alt="" />
            <div className="nav_bar">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;