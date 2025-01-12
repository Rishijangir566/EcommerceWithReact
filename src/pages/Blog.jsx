import { useContext } from "react"
import { ecomContext } from "../App"
import CartQty from "../components/CartQty"
import { Link } from "react-router-dom"

function Blog() {
 const {cart}= useContext(ecomContext)
  return (
    <>
    {
      cart.length>0 ?<div className="all flex justify-evenly ">
      <div className="cart  w-[70%]">  
        {cart.map((item)=>{
          return <div className="img h-80 w-full my-8 flex gap-8 items-center justify-evenly" key={item.id}>
              <img src={item.image} className="h-full w-[25%] object-contain" alt="" />
              <div className="about w-[60%]">
                <h2 className="  text-2xl  mt-3 font-medium">{item.title}</h2>
                <h3 className=" text-2xl font-bold text-blue-800">price : {item.price}</h3>
                <p className=" pr-8 mt-3">{item.description}</p>
                <div className="PlusMinus my-4">
                  <CartQty/>
                </div>
              </div>
          </div>
        })} 
      </div>
      <div className="total mt-8 w-[20%] text-center border-2 border-black h-20">
        <h2>Total</h2>
        <h3 className="  text-2xl text-start ml-8 mt-3 font-medium"> Price :  </h3>
      </div>
    </div> :<h2> Your Cart Is Empty <Link to="/">Go Shoping </Link></h2>
    }
    
    </>
  )
}

export default Blog