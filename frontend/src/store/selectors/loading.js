import { useSelector } from "react-redux";

export function useLoadingSelector() {
  const loading = useSelector((state) => state.loading);

  return loading;
}
