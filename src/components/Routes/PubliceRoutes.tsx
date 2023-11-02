import { Outlet, Navigate } from "react-router-dom";
import routes from "../../routes";
import { useToken } from "../../redux/selectors";

export default function PubliceRoutes() {
	const token = useToken();

	return token ? <Navigate to={routes.userPage} /> : <Outlet />;
}
