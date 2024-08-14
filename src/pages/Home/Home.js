import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa6";

function Home() {
    const nav = [
        {name : 'CredMan', password: 'Save Password', icon: <FaArrowRight />}
    ]
    return (
        <Navbar {...nav[0]}/>
    );
}

export default Home;