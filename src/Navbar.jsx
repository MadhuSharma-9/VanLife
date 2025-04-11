import {Link} from "react-router-dom";
export default function Navbar(){
    return (
        <>
        <header>
         <Link to="/" >#VANLIFE</Link>
         <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
         </nav>
        </header>
        </>
    )
}