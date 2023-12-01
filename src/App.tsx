import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import AuthPage from "pages/AuthPage";
import UserPage from "pages/UserPage";
import ErrorPage from "pages/ErrorPage";
import AddPage from "pages/AddPage";
import LearnPage from "pages/LearnPage";
import RepeatPage from "pages/RepeatPage";

import Loader from "components/Loader/Loader";
import PubliceRourtes from "components/Routes/PubliceRoutes";
import PrivateRourtes from "components/Routes/PrivateRoutes";
import Layout from "components/Layout";

import { useAppDispatch } from "reduxfiles/store";
import { getCurrentUser } from "reduxfiles/operations/auth/authOps";

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getCurrentUser());
	}, []);
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route element={<PubliceRourtes />}>
					<Route path={routes.auth} element={<AuthPage />}></Route>
				</Route>
				<Route element={<PrivateRourtes />}>
					<Route path={routes.mainLayout} element={<Layout />}>
						<Route path={routes.userPage} element={<UserPage />}></Route>
						<Route path={routes.addPage} element={<AddPage />}></Route>
						<Route path={routes.learnPage} element={<LearnPage />}></Route>
						<Route path={routes.repeatPage} element={<RepeatPage />}></Route>
					</Route>
				</Route>
				<Route path='*' element={<ErrorPage />} />
			</Routes>
		</Suspense>
	);
}

export default App;
