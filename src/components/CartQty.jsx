/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ecomContext } from "../App";
function CartQty({product}) {
  const {handleRemoveFromCart}=useContext(ecomContext)
  return (
    <>
       <div className="plusbtn flex ">
        <button className='px-1 mx-4  border-black border text-2xl'>+</button>
        <p className="mt-1 text-2xl">0</p>
        <button className='px-2 mx-4 border-black border text-2xl'>-</button>
        <MdRemoveShoppingCart className="text-3xl ml-4" onClick={()=>handleRemoveFromCart(product)}/>
       </div>
    </>
  )
}

export default CartQty