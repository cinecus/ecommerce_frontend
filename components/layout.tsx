import React from "react";
import Navbar from "./navbar";
import Footer from "./footer"

type ChildrenProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
