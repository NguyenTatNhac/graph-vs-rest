import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@material-ui/core/Container";

export default function NotFound() {
  return (
      <React.Fragment>
        <Container>
          <Header/>
          <h1>404 Not Found</h1>
        </Container>
        <Footer/>
      </React.Fragment>
  )
}
