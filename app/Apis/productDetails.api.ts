export default async function getProductDetails(id:string){
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    let data = response.json()
    return data
}