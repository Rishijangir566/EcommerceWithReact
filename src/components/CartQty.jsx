/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ecomContext } from "../App";
// import Product from "../pages/Product";
function CartQty({Product}) {
  const {handleRemoveFromCart,cart}=useContext(ecomContext)

  function getFoundCartQty (Product){
        const foundQty = cart.find((cartItem)=>{
          console.log((Product));
          console.log(cartItem.id);
          return cartItem.id===Product.id
        });
        return foundQty.quantity
  } 

  return (
    <>
       <div className="plusbtn flex ">
        <button className='px-1 mx-4  border-black border text-2xl'>+</button>
        <p className="mt-1 text-2xl">{ getFoundCartQty()}</p>
        <button className='px-2 mx-4 border-black border text-2xl'>-</button>
        <MdRemoveShoppingCart className="text-3xl ml-4" 
        onClick={()=>handleRemoveFromCart(Product)}/>
       </div>
    </>
  )
}

export default CartQty