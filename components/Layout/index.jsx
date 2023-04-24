import React from "react";

import { Header } from "../commons/Header";
import { Footer } from "../commons/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header>{children}</Header>
      <main>{children}</main>
      <Footer />
    </>
  );
};
