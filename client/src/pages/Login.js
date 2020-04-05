import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function Login() {

  return (
      <React.Fragment>
        <CssBaseline/>
        <Container>
          <Header/>
          <h1>Welcome to Login page!</h1>
        </Container>
        <Footer/>
      </React.Fragment>
  )
}
