import React from "react";
import styled from "styled-components";
const Recommand = () => {
  return (
    <Container>
      <p styled={{ height: "2000px" }}>Recommand</p>
    </Container>
  );
};

export default Recommand;

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
