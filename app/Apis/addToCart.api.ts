"use server"
import getMyToken from "../../utilities/getMyToken";

export default async function AddToCart(id: string) {
  const token = await getMyToken();
  const payload = {
    productId: id,
  };
  const headers:any = {
    token: token,
    "content-type": "application/json",
  };
  if (token) {
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(payload),
    });

    let data = await response.json();
    return data;
  }
}
