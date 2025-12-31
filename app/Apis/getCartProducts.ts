"use server"
import getMyToken from "../../utilities/getMyToken";

export default async function getCartProducts() {
  let token = await getMyToken();
  const headers: any = {
    token: token,
    "content-type": "application/json",
  };
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
    headers: headers,
  });
  let data = await response.json();
  return data;
}
