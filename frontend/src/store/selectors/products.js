import { useSelector } from "react-redux";

export function useProductsSelector() {
  const products = useSelector((state) => state.products);

  return products;
}
