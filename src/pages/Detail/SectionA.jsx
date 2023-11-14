import React from 'react'
import styled from 'styled-components';
import Image1 from "../../data/image/050131006_1_568.jpg";
import Image2 from "../../data/image/050131006_2_568.jpg";
import Image3 from "../../data/image/050131006_3_568.jpg";
import Image4 from "../../data/image/050131006_4_568.jpg";
import ButtonUp from "../../data/image/icoCountUp.png";
import ButtonDown from "../../data/image/icoCountDown.png";
import Favorite from "../../data/image/icoFavoriteOff.png";

const SectionA = () => {
  return (
    <div style={{ width: "100%", height: "570px" }}>
      <Container>
        <SiteLocation>
          <RightOl>
            <FirstLi>홈</FirstLi>
            <SecondLi>채소/버섯</SecondLi>
            <LastLi>잎/줄기채소</LastLi>
          </RightOl>
        </SiteLocation>
        <Contents>
          <SwiperdWrapper>
            <div>
            <Img src={Image1} style={{ display: "block" }} alt="부추200g" />
            <Img src={Image2} style={{ display: "none" }} alt="부추200g" />
            <Img src={Image3} style={{ display: "none" }} alt="부추200g" />
            <Img src={Image4} style={{ display: "none" }} alt="부추200g" />
            </div>
            <SwiperPagenation>
              <Bullet></Bullet>
              <Bullet></Bullet>
              <Bullet></Bullet>
              <Bullet></Bullet>
            </SwiperPagenation>
            <DetailView>
              <p style={{ padding: "0", margin: "0", fontSize: "32px", fontWeight: "700" }}>부추(200g)</p>
              <Certi>
                <Certi_p>무농약</Certi_p>
                <Certi_p>유기농</Certi_p>
              </Certi>
              <Certi>
                <Price>1,850원</Price>
              </Certi>
              <DetailBody>
                <Dl>
                  <Dt>공급유형</Dt>
                  <Dd>일반공급
                    <span style={{ float:"right" }}>밤 12시 이전 주문시 11/16 공급 예정</span>
                  </Dd>
                </Dl>
                <Dl>
                  <Dt>보관방법</Dt>
                  <Dd>냉장</Dd>
                </Dl>
                <Dl>
                  <Dt>혜택</Dt>
                  <Dd>살림충전금 결제 시 <em style={{ fontWeight: "700", color: "#e14949", fontStyle: "normal" }}>27원</em> 적립 예상</Dd>
                </Dl>
                <Line>
                  <Dt>구매수량</Dt>
                  <Dd>
                    <OptDoneBox>
                      <ProdCounter>
                        <CountDown style={{ backgroundImage: `url(${ButtonDown})` }}>감소</CountDown>
                        <InputText type="text" value={1} title='상품개수' style={{ borderTop: "solid 1px #e5e5e5", borderBottom: "solid 1px #e5e5e5" }} />
                        <CountUp style={{ backgroundImage: `url(${ButtonUp})` }}>증가</CountUp>
                      </ProdCounter>
                      <br />
                      <NumMaxTxt>제한 없음</NumMaxTxt>
                    </OptDoneBox>
                  </Dd>
                </Line>
                <TotalPrice>
                  <TotalPriceDt>
                    <TotalSpan>총 물품금액</TotalSpan>
                  </TotalPriceDt>
                  <TotalPricedd>
                    <Totalspan>원</Totalspan>
                    <Totalstrong>1,850</Totalstrong>
                  </TotalPricedd>
                </TotalPrice>
                <Btnbox>
                  <BtnFavorite  style={{ background: `url(${Favorite}) no-repeat center center` }} ></BtnFavorite>
                  <BtnOrder><span style={{fontWeight:"400", color:"#f6f6f6", fontSize: "17px", lineHeight:"48px", textAlign:"center"}}>장바구니</span></BtnOrder>
                </Btnbox>
              </DetailBody>
            </DetailView>
          </SwiperdWrapper>
        </Contents>
      </Container>
      <Container>
      </Container>

    </div>
  )
};

const Container = styled.div`
    display: relative;
    padding-bottom: 120px;
`;
const Contents = styled.div`
`
const SiteLocation = styled.div`
    position : absolute;
    top : 26px;
    width: 1200px;  
    padding: 0;
    margin : 0;
    letter-spacing: -0.025em;
    display: block;
`;

const RightOl = styled.ol`
    text-align: right;
    font-size: 0;
    line-height: 0;
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top : 170px;
    letter-spacing: -0.025em;
`
const FirstLi = styled.li`
    cursor: pointer;
    padding : 0 0 0 20px;
    margin-left: 0;
    background: url('/shopping/resources/shopping/web/images/common/icoLocationHome.png') no-repeat left 5px;
    position : relative;
    display: inline-block;
    font-size: 15px;
    line-height: 22px;
    color: #888;
`
const SecondLi = styled.li`
cursor: pointer;
    padding : 0 0 0 20px;
    margin-left: 0;
    position : relative;
    display: inline-block;
    font-size: 15px;
    line-height: 22px;
    color: #888;
`
const LastLi = styled.li`
cursor: pointer;
    padding : 0 0 0 20px;
    margin-left: 0;
    position : relative;
    display: inline-block;
    font-size: 15px;
    line-height: 22px;
    color: #888;
`
const SwiperdWrapper = styled.div`
    position : relative;
    width: 100%;
    height : 568px;
    z-index: 1;
    display: flex;
    box-sizing: content-box;
    margin-top: 80px;
`
const Img = styled.img`
    width:568px;
`
const SwiperPagenation = styled.div`

`
const Bullet = styled.a`
    
`
const DetailView = styled.div`
    width: 630px;
    float: right;
    padding-left: 45px;
`
const Certi = styled.div`
    margin: 5px 0 0 --5px;
    display: flex;
`
const Certi_p = styled.p`
    float: left;
    min-width: 34px;
    height: 24px;
    margin: 5px 0 0 5px;
    padding: 0 5px;
    border: 1px solid #e5e5e5;
    box-sizing: border-box;
    color: #888;
    font-size: 13px;
    font-weight: 400;
    line-height: 22px;
`
const Price = styled.p`
  float:left;
  font-weight: 700;
  font-size :30px;
  height: 80px;
  margin-top: 10px;
`
const DetailBody = styled.div`
  margin-top: 20px;
  border-top: 1px solid #eee;
  padding: 0; 
  margin: 0;
`
const Dl = styled.dl`
    padding: 20px 0;
    font-family: 'robo', 'noto','맑은고딕',sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #000;
    word-break: break-all;
    margin: 0;
    margin-top : 10px;
`
const Dt = styled.dt`
    float: left;
    width: 131px;
    color: #888;
    line-height: 1.2;
    text-align: left;
    padding: 0;
    margin: 0;
    word-break: break-all;
`
const Dd = styled.dd`
    float: left;
    width: calc(100% - 131px);
    text-align: left;
    line-height: 1.2;
    zoom: 1;
    padding: 0;
    margin : 0;
    display: block;
`
const Line = styled.dl`
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    margin: 0;
    letter-spacing: -0.025em;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    height: 100px;
`
const OptDoneBox = styled.div`
    position: relative;
`
const ProdCounter = styled.div`
    transform: inherit !important;
    text-align: left;
    line-height: 1.2;
    padding: 0;
    margin: 0;
    letter-spacing: -0.025em;
    clear: both;
    display: block;
`
const CountDown = styled.button`
    float: left;
    width: 32px;
    height: 30px;
    font-size: 0;
    background-repeat: no-repeat;
    background-position: center top;
    border: solid 1px #e5e5e5;
    border-radius: 0;
`
const InputText = styled.input`
    float: left;
    width: 30px;
    height: 30px;
    text-align: center;
    font-size: 13px;
    line-height: 28px;
    box-sizing: border-box;    
    border-radius: 0;
    padding: 0;
    font-family: 'robo', 'noto','맑은고딕',sans-serif;
    font-weight: 400;
    color: #000;
    vertical-align: top;
    background: none;
    border: 0;
    writing-mode: horizontal-tb !important;
    padding-block: 1px;
    padding-inline: 2px;
`
const CountUp = styled.button`
    float: left;
    width: 32px;
    height: 30px;
    font-size: 0;
    background-repeat: no-repeat;
    background-position: center top;
    border: solid 1px #e5e5e5;
    border-radius: 0;
`
const NumMaxTxt = styled.p`
      margin-top: 15px;
      color: #666;
`
const TotalPrice = styled.dl`
    margin: 0;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    content: '';
    display: block;
    clear: both;
    font-family: 'robo', 'noto','맑은고딕',sans-serif;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    color: #000;
    word-break: break-all;
    height: 60px;
    margin-top: 30px;
`
const TotalPriceDt = styled.dt`
    padding-top: 10px;
    font-size: 17px;
    color: #000;
    float: left;
    width: 131px;    
    line-height: 1.2;
    text-align: left;
`
const TotalSpan = styled.span`
    font-size: 17px;
    color: #000;
    font-weight: 400;
     word-break: break-all;
`
const TotalPricedd = styled.dd`
    float: left;
    width: calc(100% - 180px);
    text-align: left;
    line-height: 1.2;
    font-weight: 400;
    font-size: 15px;
    color: #000;
    word-break: break-all;
    padding: 0;
    margin: 0;
    letter-spacing: -0.025em;
    display: block;
    margin-inline-start: 40px;
    float: right;
`
const Totalstrong = styled.strong`
    float: right;
    font-weight: 700;
    font-size: 34px;
    text-align: left;
    line-height: 1.2;
    color: #000;
    word-break: break-all;
`
const Totalspan = styled.span`
    margin-left: 3px;
    font-size: 17px;
    font-weight: 700;
    text-align: left;
    line-height: 1.2;
    color: #000;
    word-break: break-all;
    letter-spacing: -0.025em;
    float: right;
    padding-top: 14px;
`
const Btnbox = styled.div`
    text-align: right;
    font-size: 0;
    padding:0;
    margin:0;
    margin-top: -20px;
`
const BtnFavorite = styled.button`
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #bbb;
    vertical-align: top;
    cursor: pointer;
`
const BtnOrder = styled.button`
    width: 320px;
    display: inline-block;
    margin-left: 10px;
    border: 1px solid #76bd42;
    background-color: #76bd42;
    box-sizing: border-box;    
    transition: all 0.3s ease;
    padding: 0;
    font-family: 'robo', 'noto','맑은고딕',sans-serif;
    font-weight: 400;
    vertical-align: top;    
    cursor: pointer;
`
export default SectionA;