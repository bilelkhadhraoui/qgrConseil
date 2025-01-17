import React from "react";
import Header2 from "../header/Header2";
import Footer from "../footer/Footer";
import Breadcrumb from "../common/Breadcrumb";
import { useRouter } from "next/router";

const MainLayout = ({ children }) => {
  const route = useRouter();
  const path = route.pathname
  return (
    <>
      <Header2 />
      <Breadcrumb />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
