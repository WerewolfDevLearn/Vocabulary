import { lazy, Suspense } from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";
import Loader from "components/Loader/Loader";
import AuthPage from "pages/AuthPage";

function App() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path={routes.auth} element={<AuthPage />}></Route>
			</Routes>
		</Suspense>
	);
}

export default App;
