import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:scale-105 transition-transform duration-300">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={product.image || "https://avatar.vercel.sh/shadcn1"}
        alt={product.name}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description || "No description available."}</CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-2">
        <div className="text-sm text-gray-500 line-through">
          ${product.orinalPrice?.toFixed(2) ?? "0.00"}
        </div>
        <div className="text-lg font-semibold">
          ${product.discountPrice?.toFixed(2) ?? "0.00"}
        </div>
        <Button className="w-full">View Product</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
