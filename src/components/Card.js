import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
function Card({item}) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text)
        .then(() => {
            alert(`${text === item.username ? 'Username' : 'Password'} copied to clipboard!`)
        })
        .catch(error => console.error('filed to copy text:', error))
    };

    return (
        <div className="information">
            <h4 className="fs-4">Site:</h4>
            <p className="fs-5">{item.site}</p>
            <hr />
            <h4 className="fs-4">Username:</h4>
            <p className="fs-5">{item.username} <FaCopy className="ms-5" style={{cursor : 'pointer'}} onClick={() => handleCopy(item.username)} /> </p>
            <hr />
            <h4 className="fs-4">Password:</h4>
            <input className="inputPassword"
                type={showPassword ? "text" : "password"}
                value={item.password}
                readOnly
            />
            <span onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash style={{cursor : 'pointer'}} /> : <FaEye style={{cursor : 'pointer'}} />}
            </span>
            <FaCopy className="ms-2" style={{cursor : 'pointer'}} onClick={() => handleCopy(item.password)}/>
        </div>
    )
}

export default Card;



