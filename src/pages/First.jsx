import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product"

function First() {
    const [products, setProducts] = useState([])
   async function handleApi(){
    const response = await axios.get("https://fakestoreapi.com/products")
     setProducts(response.data)
     console.log(response.data); 
   };

   useEffect(()=>{
    handleApi()
   },[])
  return (
<>
{
    products.length>0?(
      <div className="products flex flex-wrap mx-4 gap-8 justify-evenly">
          {products.map((product)=>{
      return <Product key={product.id}  product={product}/>
          })}
        </div>
            ):<h2>Loading ...</h2> 
}
    
</>
)
}

export default First