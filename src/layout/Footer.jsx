import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-row justify-between">
          <div>
            <Link to="/">이용약관</Link>ㆍ<Link to="/">개인정보처리방침</Link>ㆍ
            <Link to="/">한살림소개</Link>ㆍ<Link to="/">소삭자PDF</Link>ㆍ
            <Link to="/">앱다운로드</Link>
          </div>
          <div>
            <Link to="/">한살림 가족</Link>
            <Link to="/">지역 한살림</Link>
          </div>
        </div>
        <div className="flex flex-row">
          <span>상호명: 한살림소비자생활협동조합연합회</span>
          <span>대표자: 권옥자</span>
          <span>
            사업자등록번호:
            <Link to="/">
              <strong>126-82-12328</strong>
            </Link>
          </span>
          <span>
            통신판매업신고번호 :
            <Link to="/">
              <strong>2014-경기안성-093호</strong>
            </Link>
          </span>
        </div>
        <div className="flex flex-row">
          <span>
            안성성사무소 : 경기 안성시 대덕면 안성대로 1526(보동리 285-3) /
            서울사무소 : 서울시 강남구 봉은사로81길 15(삼성동)
          </span>
        </div>
        <div className="flex flex-row">
          <span>
            입점문의:
            <Link to="/">
              {" "}
              <strong>입정문의하기</strong>
            </Link>
          </span>
          <span>
            이메일 :<Link to="/"> hansalim@hansalim.or.kr</Link>
          </span>
        </div>
        <div className="flex flex-row">
          <span>이곳의 모든 저작권은 한살림에게 있습니다.</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;

const Container = styled.div`
  padding-bottom: 4rem;
  font-size: 0.8rem;
`;
