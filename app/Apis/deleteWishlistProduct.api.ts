"use server";
import getMyToken from "../../utilities/getMyToken";

export default async function deleteWishlistProduct(id: string) {
  const token = await getMyToken();
  
  const headers:any = {
    token: token,
    "content-type": "application/json",
  };
  if (token) {
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
      {
        method: "DELETE",
        headers: headers
      }
    );

    let data = await response.json();
    return data;
  }
}
