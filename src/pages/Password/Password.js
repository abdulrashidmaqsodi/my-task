import Navbar from "../../components/Navbar/Navbar";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Password.css'
function Password() {
    const nav = [
        { name: 'CredMan' }
    ]
    const data = 'Go Back Home'
    const icon = <FaLongArrowAltLeft /> 
    return (
        <>
            <div>
                <Navbar {...nav[0]} />
                <div className="redirect">
                    <NavLink className='nav-links' to='/'>{icon} {data}</NavLink>
                </div>
            </div>
        </>
    )
}
export default Password;