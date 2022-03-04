import { useSelector } from "react-redux";
import { LoadingState } from "store/reducers/loading";

export function useLoadingSelector(): LoadingState {
  const loading = useSelector((state) => state.loading);

  return loading;
}
