import './Navbar index.scss';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => (
    <div className= 'nav-bar'>
        <nav >
            <div class="name">Jean-Pierre Viljoen</div>
            <NavLink exact = 'True' activeclassname='active' className= 'about-link' to= '/About' >
                <p1>About</p1>
                 </NavLink>
             <NavLink exact = 'True' activeclassname='active' className= 'about-link' to= '/Expereince' >
                <p1>Experience</p1>
                </NavLink>

            <NavLink exact = 'True' activeclassname='active' className= 'about-link' to= '/Projects' >
                 <p1>Projects</p1>
                </NavLink>

            <NavLink exact = 'True' activeclassname='active' className= 'about-link' to= '/Contact' >
                 <p1>Contact</p1>
                </NavLink>
        </nav>
    </div>
)

export default Navbar