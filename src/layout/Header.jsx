import React, { useState } from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineCalendar, AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PiShoppingCartLight } from "react-icons/pi";

const Header = () => {
  // 서브 메뉴를 토글하기 위한 상태
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div className="">
      <>
        <div className="flex flex-row justify-between mt-5 text-slate-700 mb-3">
          <div className="flex flex-row items-center mt-3">
            <Link to="/">
              <img
                src="https://shop.hansalim.or.kr/shopping/resources/shopping/web/images/common/logo.png"
                alt="#"
              />
            </Link>
            <div className="flex flex-row items-center ml-4">
              <AiOutlineCalendar className="text-xl mr-1" />
              <Link to="/" className="text-xs">
                공급일
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-row text-xs items-center">
              <Link to="/">
                <img
                  src="https://shop.hansalim.or.kr/shopping/resources/shopping/web/images/common/icoDlvr.png"
                  alt=""
                />
              </Link>
              <Link to="/" className="mr-2 ml-6">
                로그인
              </Link>
              l
              <Link to="/" className="mx-2">
                나의한살림
              </Link>
              l
              <Link to="/" className="mx-2 flex flex-row items-center">
                조합원센터
                <MdKeyboardArrowDown className="text-xl text-slate-400" />
              </Link>
              l
              <Link to="/" className="ml-2">
                매장안내
              </Link>
            </div>
          </div>
        </div>
      </>
      <Menubar className="flex flex-row justify-between text-base font-semibold ">
        <div className="flex flex-row items-center mt-5">
          {/* 메뉴 아이템에 호버 이벤트 추가 */}
          <div
            className="relative mr-3;"
            onMouseEnter={() => setSubMenuOpen(true)}
            onMouseLeave={() => setSubMenuOpen(false)}
          >
            <div className="flex flex-row items-center cursor-pointer pb-4">
              <AiOutlineMenu className="text-3xl mr-3 " />
              전체물품
            </div>
            {/* 서브 메뉴 */}
            {isSubMenuOpen && (
              <Nav className=" absolute bg-white border shadow-lg w-52  text-sm overflow-hidden  overflow-y-scroll scroll-m-0">
                <Link to="/" className="">
                  <ul className="p-3 hover:text-lime-500 hover:bg-slate-50 ">
                    쌀/잡곡
                  </ul>
                </Link>
              </Nav>
            )}
          </div>
          <div className="flex flex-row mb-4">
            <Link to="/rcmd" className="mx-3 hover:text-lime-500">
              추천
            </Link>
            <Link to="/" className="mx-3 hover:text-lime-500">
              알뜰
            </Link>
            <Link to="/" className="mx-3 hover:text-lime-500">
              새물품
            </Link>
            <Link to="/" className="mx-3 hover:text-lime-500">
              사전예약
            </Link>
            <Link to="/" className="mx-3 hover:text-lime-500">
              꼬마와땅
            </Link>
            <Link to="/" className="mx-3 hover:text-lime-500">
              채식
            </Link>
            <Link
              to="/"
              className="flex flex-row items-center ml-3 mr-7 hover:text-lime-500"
            >
              참여 <MdKeyboardArrowDown />
            </Link>
            <Link to="/" className="flex flex-row items-center text-xs">
              더보기 <MdKeyboardArrowDown />
            </Link>
          </div>
        </div>
        <div className="flex items-center relative">
          <form action="">
            <div className="relative mr-6">
              <input
                type="text"
                className="rounded-3xl bg-gray-100 pr-36 pl-4 py-3 text-xs w-full"
                placeholder="무엇을 찾아드릴까요?"
              />
              <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl" />
            </div>
          </form>
          <Link to="/">
            <PiShoppingCartLight className="text-3xl items-center" />
          </Link>
        </div>
      </Menubar>
    </div>
  );
};

export default Header;

const Nav = styled.div`
  height: 38rem;
  text-align: left;
  z-index: 1090;
`;

const Menubar = styled.div`
  position: sticky;
  top: 0px;
`;
