import {Link} from "react-router-dom"

export const Navbar = ()=>{
   return(
   <div>
    NAVBAR
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/form">Form</Link>
    </div>
   )
}