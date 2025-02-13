import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <div className="Links">
                <Link to = "/">Home</Link>
                <Link to = "/about.com">About BTL</Link>
                <Link to = "/events.com">Events</Link>
                <Link to = "/gallery.com">Gallery</Link>
                <Link to = "/registration.com">Registration</Link>
                <Link to = "/contact.com">Contact us</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;