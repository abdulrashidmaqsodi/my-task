import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";
import './Info.css'
import Card from "../../Card";

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

    if (loading) return <Spinner />;
    if (error) return <div>Error: {error.message}</div>;

   

    return (
        <>
            <p>List of passwords you saved while registering on websites</p>
            <div className="Info">
                {data.map(item => (
                    <Card item={item} key={item.id}/>
                 ))}
            </div>
        </>
    );
};
export default Info;