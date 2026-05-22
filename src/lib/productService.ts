import { axiosInstance } from "./axios";
import { Product } from "../types/product";

export async function fetchProducts(): Promise<Product[]> {
  const response = await axiosInstance.get<Product[]>("/rest/v1/products", {
    params: { select: "*" },
  });

  return response.data;
}
