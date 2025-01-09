import { useContext } from "react"
import { Link } from "react-router-dom"
import { ecomContext } from "../App"

function Header() {
   const {cart}=useContext(ecomContext)
  return (
    <>
     <nav className="flex justify-between px-16 text-white bg-red-600">
      <h2 className="text-4xl py-4"> Ecommarce </h2>
      <ul className="flex justify-between items-center">
        <li className="mx-4"><Link to="/">Home </Link></li>
        <li className="mx-4"><Link to="/about">About </Link></li>
        <li className="mx-4"><Link to="/blog">{cart} Cart</Link></li>
        <li className="mx-4"><Link to="/contact">Contact </Link></li>
        
      </ul>
     </nav>
    </>
  )
}

export default Header