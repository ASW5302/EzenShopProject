import React, { useEffect } from "react";
import styled from "styled-components";
import "./index.css";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import withRouter from "./hooks/withRouter";
import AnimRoutes from "./routes/Routes";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

/*  import Home from "./pages/Home";  */

/* const _ScrollToTop = (props) => {
  const { pathname } = useLocation();
  useEffect(() => {}, [pathname]);
  return props.children;
};

const ScrollTop = withRouter(_ScrollToTop);
 */
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      {/*       <ScrollTop> */}
      <div className="h-full w-full">
        <Container>
          <Header />
        </Container>
        <Line />
        <div className="flex flex-col h-screen">
          <AnimRoutes />
        </div>
        <Container>
          <Footer />
        </Container>
      </div>
      {/*       </ScrollTop> */}
    </Router>
  );
};

export default App;

const Container = styled.div`
  /* 화면 크기가 640px 이상인 경우 스타일을 변경 */
  @media (min-width: 640px) {
    max-width: 616px;
    margin: 0 auto;
  }

  /* 화면 크기가 768px 이상인 경우 스타일을 변경 */
  @media (min-width: 768px) {
    max-width: 744px;
  }

  /* 화면 크기가 1024px 이상인 경우 스타일을 변경 */
  @media (min-width: 1024px) {
    max-width: 1200px;
  }
`;
const Line = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;
