import React from "react";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";
import { GlobalStyle, Container } from "./layout.style";

const Layout = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
