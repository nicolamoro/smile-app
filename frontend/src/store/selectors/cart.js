import { useSelector } from "react-redux";

export function useCartSelector() {
  const cart = useSelector((state) => state.cart);

  return cart;
}
