import { useContext } from "react"
import { ecomContext } from "../App"
import CartQty from "../components/CartQty"
import { Link } from "react-router-dom"

function About() {
  const{cart}= useContext(ecomContext)
  return (
    <>
    {
      cart.length>0 ?<div className="all w-full ">
        {cart.map((item)=>{
          return <div className="img  m-8 flex gap-8 items-center justify-evenly" key={item.id}>
              <img src={item.image} className="h-96 w-96  object-contain" alt="" />
              <div className="about">
                <h2 className="  text-2xl  mt-3 font-medium">{item.title}</h2>
                <h3 className=" text-2xl font-bold text-blue-800">price : {item.price}</h3>
                <p className=" pr-8 mt-3">{item.description}</p>
                <div className="PlusMinus my-4">
                  <CartQty/>
                </div>
              </div>
          </div>
        })}
    </div> :<h2> Your Cart Is Empty <Link to="/">Go Shoping </Link></h2>
    }
    
    </>
  )
}

export default About