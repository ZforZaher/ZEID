"use server";
import getMyToken from "../../utilities/getMyToken";
import { Icheckout } from "../interface/checkOut.interface";

export default async function PayForCart(formValue: Icheckout, cartId: string) {
  const token = await getMyToken();
  const payload = {
    shippingAddress: formValue
  };
  const headers: any = {
    token: token,
    "content-type": "application/json",
  };
  if (token) {
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      }
    );

    let data = await response.json();
    return data;
  }
}
