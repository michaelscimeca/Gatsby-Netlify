import React from "react"
import Header from "../components/header/header";
// Utility
import useBodyClass from "./utility/touchEventDetection";
import Scroll from "./utility/scroll/locomotiveScroll";

const Layout = ({ pageTitle, children, location }) => {
  // Created to hook in to scss no-touch event
  useBodyClass(`no`);
  const path = children.props?.path;
  const page = (path === '/') ? `home` : `${path?.replace('/', '')}`;
  return (
    <>
      <Scroll/>
      <main className={`${page}-page prose`}>
        <Header />
        {children}
      </main>
    </>
  );
}

export default Layout;
