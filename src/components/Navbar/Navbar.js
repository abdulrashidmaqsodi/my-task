
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar({name, password, icon}) {
    return (
        <>
            <div className="maindiv">
                <div>
                    <h1 className='credMan'>{name}</h1>
                </div>
                <div className='wrapper'>
                    <NavLink className='nav-link passwordlink' to='/password'>{password} {icon} </NavLink>
                </div>
            </div>
        </>
    )
}
export default Navbar;