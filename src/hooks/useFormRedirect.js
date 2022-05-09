import { useNavigate, useLocation } from "react-router-dom";

const useFromRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  return { location, from, navigate };
};

export default useFromRedirect;
