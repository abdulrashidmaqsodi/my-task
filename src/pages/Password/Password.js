import Navbar from "../../components/Navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Password.css'
import AddPassword from "../../components/AddPassword/AddPassword";
function Password({icon, data}) {
    const nav = [
        { name: "CredMan", password: "Go Back Home", icon: <FaLongArrowAltLeft />, link:"/" },
    ]
   
    return (
        <>
            <div>
                <Navbar {...nav[0]} />
                <div>
                    <NavLink className='nav-links' to='/'>{icon} {data}</NavLink>
                </div>
                <AddPassword/>
            </div>
        </>
    )
}
export default Password;


