import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import './Info.css'
import { FaCopy } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

function Info() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://66b4311c9f9169621ea2030c.mockapi.io/api/v1/savedpasswords')
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <Spinner/>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
        <p className="ms-5">List of passwords you saved while registering on websites</p>
            <div className="Info">
                {data.map(item => (
                    <div key={item.id} className="information">
                        <h4 className="fs-4">Site:</h4>
                        <p className="fs-5">{item.site}</p>
                        <hr/>
                        <h4 className="fs-4">Username:</h4>
                        <p className="fs-5">{item.username} <FaCopy/> </p>
                        <hr/>
                        <h4 className="fs-4">Password:</h4>
                        <p className="fs-5">{item.password} <IoEyeSharp/> <FaCopy/></p>
                    </div>
                ))}
            </div>
        </>
    );
};
export default Info;