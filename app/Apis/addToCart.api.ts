// "use server"
// import getMyToken from "../../utilities/getMyToken";

// export default async function AddToCart(id: string) {
//   const token = await getMyToken();
//   const payload = {
//     productId: id,
//   };
//   const headers:any = {
//     token: token,
//     "content-type": "application/json",
//   };
//   if (token) {
//     let response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
//       method: "POST",
//       headers: headers,
//       body: JSON.stringify(payload),
//     });

//     let data = await response.json();
//     return data;
//   }
// }

"use client"
import { createContext, useState, useEffect, ReactNode } from "react";
import getCartProducts from "../Apis/getCartProducts";

// Define the type separately for clarity
type CartContextType = {
  dataDetails: number | null;
  setDetails: React.Dispatch<React.SetStateAction<number | null>>;
}

// Create context with undefined as default (better than null)
export const cartItemContext = createContext<CartContextType | undefined>(undefined)

export function CartContextProvider({ children }: { children: ReactNode }) {
    const [dataDetails, setDetails] = useState<number | null>(null)

    async function getDetails() {
       let response = await getCartProducts();
       setDetails(response.numOfCartItems)
    }
    
    useEffect(() => {
        getDetails()
    }, [])

    return(
        <cartItemContext.Provider value={{ dataDetails, setDetails }}>
            {children}
        </cartItemContext.Provider>
    )
}

// Optional: Create a custom hook for better type safety
export function useCartContext() {
    const context = useContext(cartItemContext);
    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartContextProvider');
    }
    return context;
}
