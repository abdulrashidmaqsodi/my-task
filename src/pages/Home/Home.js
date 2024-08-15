import './Home.css'
import Navbar from '../../components/Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa6";
import Info from '../../components/Navbar/Info/Info';

function Home() {
    const nav = [
        {name : 'CredMan', password: 'Save Password', icon: <FaArrowRight />}
    ]
    return (
       <>
         <Navbar {...nav[0]}/>
         <Info/>
       </>
    );
}

export default Home;