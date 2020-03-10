import React from "react";
import styles from "./Routes.module.scss";
import { Router, Redirect } from "@reach/router";
import PageOne from "../PageOne/PageOne";
import PageTwo from "../PageTwo/PageTwo";
import PageThree from "../PageThree/PageThree";
import PageFour from "../PageFour/PageFour";
import PageFive from "../PageFive/PageFive";

const NotFound = () => <p>What you are looking for is not on this page</p>;

const Routes = () => {
  return (
    <>
      <Router>
        <Redirect noThrow from="/" to="home" />
        <PageOne path="pageone" />
        <PageTwo path="pagetwo" />
        <PageThree path="pagethree" />
        <PageFour path="pagefour" />
        <PageFive path="pagefive" />
        <NotFound default />
      </Router>
    </>
  );
};

export default Routes;
