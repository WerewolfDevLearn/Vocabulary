import { Outlet, Navigate } from "react-router-dom";
import routes from "../../routes";
import { useToken } from "../../redux/selectors";

export default function PrivateRoutes() {
	const token = useToken();

	return token ? <Outlet /> : <Navigate to={routes.auth} />;
}
