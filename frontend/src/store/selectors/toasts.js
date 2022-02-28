import { useSelector } from "react-redux";

export function useToastsSelector() {
  const toasts = useSelector((state) => state.toasts);

  return toasts;
}
