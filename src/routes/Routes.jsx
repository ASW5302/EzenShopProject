import React from "react";
import { Routes, Route } from "react-router-dom";
import withRouter from "../hooks/withRouter";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Home from "../pages/Home";
import Recommand from "../pages/Recommand/Recommand";

const AnimateRoutes = withRouter(({ location }) => (
  <TransitionGroup>
    {/*  <CSSTransition
      key={location.key}
      timeout={{
        enter: 50,
        exit: 50,
      }}
      classNames="page"
      unmoutOnExit
    > */}
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/rcmd" element={<Recommand />} />
    </Routes>
    {/*    </CSSTransition> */}
  </TransitionGroup>
));

export default AnimateRoutes;
