import Home from './Home'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import First from './pages/First'
import { createContext, useState } from 'react'

export const ecomContext= createContext(null);

function App() {
   const router= createBrowserRouter([
    {path:"/",
      element:<Home/>,
      children:[
        {
        index:"true",
        element:<First/>
      },
        {
        path:"/about",
        element:<About/>
      },
        {
        path:"/blog",
        element:<Blog/>
      },
        {
        path:"/contact",
        element:<Contact/>
      },
    ]
    }
   ])


   const [cart ,setCart]=useState([]);

   function handleAddToCart(addProduct){
    const productAddToCart ={...addProduct , quantity:1};
      setCart([...cart,productAddToCart])
   }

   function handleRemoveFromCart(removeproduct){
      setCart(cart.filter((cartItem)=>{
        return cartItem.id!==removeproduct.id}))
   }

   function isProductInCart(addProduct){
       const productFound= cart.find((cartItem)=>{
        return cartItem.id===addProduct.id})
         return productFound
      }
       
  return (
    <>
    <ecomContext.Provider value={{cart,setCart,handleAddToCart,isProductInCart,handleRemoveFromCart}}> 
      <RouterProvider router={router}/>
    </ecomContext.Provider>
    </>
  )
}

export default App
