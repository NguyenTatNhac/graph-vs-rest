import Header from "../components/Header";
import React from "react";
import Footer from "../components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function Signup() {
  return (
      <React.Fragment>
        <CssBaseline/>
        <Container>
          <Header/>
          <h1>Welcome to Sign Up page!</h1>
        </Container>
        <Footer/>
      </React.Fragment>
  )
}
