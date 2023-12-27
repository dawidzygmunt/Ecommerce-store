import { Product } from "@/types";
import qs from "query-string"

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

interface Query {
  cateogryId?: string,
  colorId?: string,
  sizeId?: boolean,
  isFeatured?: boolean,
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.cateogryId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await fetch(url)

  return response.json()
}

export default getProducts