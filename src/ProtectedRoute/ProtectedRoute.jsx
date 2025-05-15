import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  return user ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;
