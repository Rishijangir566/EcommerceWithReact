/* eslint-disable react/prop-types */
import { useContext } from "react"
import { Link } from "react-router-dom"
import { ecomContext } from "../App"
import CartQty from "../components/CartQty"

function Product({product}) {
    const {handleAddToCart,isProductInCart}=useContext(ecomContext) 
 
  return (
    <>
        <div className="item  border-black w-52  mx-4 mt-12">
            <div className="text-center items h-[21rem]  ">
        <img src={product.image} className="h-60 w-60" alt="product image" />
              <p className=" px-4 h-12 overflow-hidden mt-3 font-medium">{product.title} </p>
              <h2 className=" text-2xl font-bold text-blue-800">Price :{product.price}</h2>
            </div>
            <div className="btn text-center mt-4" >
            {isProductInCart(product)?
            (<CartQty productId={product.id}/>):
            (<Link to="" onClick={(e)=>{e.preventDefault(), handleAddToCart(product)}} className=" px-12 py-2 bg-green-800 text-white rounded-md " > Add To Cart</Link>)}
              
            </div>
             </div>
          
    </>
  )
}

export default Product