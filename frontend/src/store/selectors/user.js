import { useSelector } from "react-redux";

export function useUserSelector() {
  const user = useSelector((state) => state.user);

  return user;
}
