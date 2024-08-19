
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar({name, password, icon, link}) {
    return (
        <>
            <div className="maindiv">
                    <h1 className='credMan'>{name}</h1>
                <div>
                    <NavLink className='nav-link' to={link}>{password} {icon} </NavLink>
                </div>
            </div>
        </>
    )
}
export default Navbar;