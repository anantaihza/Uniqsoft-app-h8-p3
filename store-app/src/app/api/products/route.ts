import { getProducts } from "@/db/models/product";

export async function GET(request: Request) {
  const products = await getProducts()

  return Response.json(products)
}