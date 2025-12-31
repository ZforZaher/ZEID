"use client"
import { createContext, useState, useEffect } from "react";
import getCartProducts from "../Apis/getCartProducts";

export const cartItemContext = createContext(null)
export function CartContextProvider({children}:{children:React.ReactNode}){
    const [dataDetails, setDetails] = useState<number|null>(null)

    async function getDetails(){
       let response = await getCartProducts();
       setDetails(response.numOfCartItems)
    }
    useEffect(()=>{
        getDetails()
    },[])

    return(
        <cartItemContext.Provider value={{dataDetails, setDetails}}>
            {children}
        </cartItemContext.Provider>
    )
}