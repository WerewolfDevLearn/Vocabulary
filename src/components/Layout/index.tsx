import { Outlet } from "react-router-dom";

import Header from "components/Header";
import Loader from "components/Loader/Loader";
import { useIsRefreshing } from "reduxfiles/selectors";
import { MainContainer, InnerContainer } from "./Layout.styled";

export default function Layout() {
  const isRefreshing = useIsRefreshing();
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <MainContainer>
          <Header />
          <InnerContainer>
            <Outlet />
          </InnerContainer>
        </MainContainer>
      )}
    </>
  );
}
