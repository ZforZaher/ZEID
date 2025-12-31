"use server";
import getMyToken from "../../utilities/getMyToken";

export default async function UpdateCart(id: string, countNumber: number) {
  const token = await getMyToken();
  const payload = {
    count: countNumber,
  };
  const headers:any = {
    token: token,
    "content-type": "application/json",
  };
  if (token) {
    let response = await fetch(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(payload),
      }
    );

    let data = await response.json();
    return data;
  }
}
