import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.tsx'
import { NavbarContext } from './context/navbar.ts'
import { useState } from 'react'
import { LikedContext } from './context/liked.ts'
import { Card, CardProps } from './types/types.ts'
import { AuthenticationContext } from './context/authentication.ts'
import { CardContext } from './context/basket.ts'

function App() {

  const [directory, setDirectory] = useState<any>("home")
  const [liked, setLiked] = useState<CardProps[]>([]);
  const [user, setUser] = useState<string>("");
  const [products, setProducts] = useState<Card[]>([]);

  return (
    <>
        <LikedContext.Provider value={{products: liked, setProducts: setLiked}}>
          <AuthenticationContext.Provider value={{user: user, setUser: setUser}}>
            <CardContext.Provider value={{products: products, setProducts: setProducts}}>
              <NavbarContext.Provider value={{activeDirectory: directory, setActiveDirectory: setDirectory}}> 
                <RouterProvider router={router} />
              </NavbarContext.Provider>
            </CardContext.Provider>
          </AuthenticationContext.Provider>
        </LikedContext.Provider>
    </>
  )
}

export default App
