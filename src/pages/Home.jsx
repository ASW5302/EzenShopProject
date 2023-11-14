import React from "react";
import styled from "styled-components";
import Slider from "../hooks/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Container>
        <div className="my-20">
          <h2 className="text-3xl font-bold">이 물품은 어떠세요?</h2>
          <div className="flex flex-row">
            <img src="" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;

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
