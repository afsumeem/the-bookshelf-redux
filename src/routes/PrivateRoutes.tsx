import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoutes({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <p>Loading.............</p>;
  }

  if (!user.email && !isLoading) {
    return <Navigate to="/signin" state={{ path: pathname }}></Navigate>;
  }

  return children;
}
