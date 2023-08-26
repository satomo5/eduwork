import { matchRoutes, useLocation } from "react-router-dom";
import { PATH } from "../const/route";

export const useCheckCurrentPath = () => {
  const path = PATH?.map(item => {
    return {
      path: item.path
    }
  }) || [];
  
  const location = useLocation();
  const [{ route }] = matchRoutes(path, location);

  return route.path;
};
