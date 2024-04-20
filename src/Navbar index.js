import './Navbar index.scss';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
    <div className = 'nav-bar-background'>
        <div className= 'nav-bar'>
            <nav >
                <div class="nav links nav-links-left">
                    <div class='name'>
                    <NavLink exact = 'True' activeclassname= 'active' className= 'about-link' to = '/'>
                        Jean-Pierre Viljoen
                    </NavLink>
                    </div>
                </div> 
                <div className="nav-links nav-links-right">

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

                </div>
            </nav>
        </div>
    </div>
)

export default Navbar