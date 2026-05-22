"use client";

import { useQuery } from "@tanstack/react-query";
import ProductCard from "../../components/productCard/ProductCard";
import Wrapperr from "../../components/wrapper/Wrapperr";
import { fetchProducts } from "../../lib/productService";

const Page = () => {
  const { data: products, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  return (
    <Wrapperr>
      <div className="mt-6 px-5">
        {isLoading ? (
          <div className="text-center py-10">Loading products...</div>
        ) : error ? (
          <div className="text-center py-10 text-red-600">
            Failed to load products.
          </div>
        ) : !products?.length ? (
          <div className="text-center py-10">No products found.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </Wrapperr>
  );
};

export default Page;
