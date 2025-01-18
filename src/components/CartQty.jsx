/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ecomContext } from "../App";
// import Product from "../pages/Product";
function CartQty({productId}) {
  const {handleRemoveFromCart,Increment,Decrement,getFoundCartQty}=useContext(ecomContext)

 

  return (
    <>
       <div className="plusbtn flex ">
        <button className='px-1 mx-4  border-black border text-2xl' onClick={()=>Increment(productId)}>+</button>
        <p className="mt-1 text-2xl">{ getFoundCartQty(productId)}</p>
        <button className='px-2 mx-4 border-black border text-2xl' onClick={()=>Decrement(productId)}>-</button>
        <MdRemoveShoppingCart className="text-3xl ml-4" 
        onClick={()=>handleRemoveFromCart(productId)}/>
       </div>
    </>
  )
}

export default CartQty