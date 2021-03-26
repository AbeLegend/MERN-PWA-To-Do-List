import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ ...rest }) => {
  const { auth } = useSelector((state) => ({ ...state }));

  return auth ? (
    auth.token ? (
      <Route {...rest} />
    ) : (
      <Redirect to="/login" />
    )
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
