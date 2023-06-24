import React from "react";
import { useNavigate } from "react-router-dom";
import backImage from "../../assets/images/icon-arrow-left.png";
import moreImage from "../../assets/images/icon-more-vertical.png";
import LogoImage from "../../assets/images/Logo.png";
import { HeaderButton, HeaderInput, HeaderUI, Logo, FollowersHeaderUI,FollowingsHeaderUI, HeaderTextP } from "./HeaderStyle";

export default function Header({ type, children, setBottomSheetOpen, onChange, value }) {
  const navigate = useNavigate();

  const UI = {
    logo: (
      <HeaderUI>
        <Logo onClick={() => navigate("/")}>
          <img src={LogoImage} alt="입구팔구" />
        </Logo>
      </HeaderUI>
    ),

    search: (
      <>
        <h2 className="a11y-hidden">검색창</h2>
        <HeaderUI>
          <HeaderButton onClick={() => navigate(-1)}>
            <img src={backImage} alt="뒤로 가기" />
          </HeaderButton>
          <HeaderInput type="text" placeholder="계정 검색" onChange={onChange} value={value} />
        </HeaderUI>
      </>
    ),

    basic: (
      <HeaderUI>
        <HeaderButton onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </HeaderButton>
        {children && <h2>{children}</h2>}
        <HeaderButton onClick={() => setBottomSheetOpen && setBottomSheetOpen(true)}>
          <img src={moreImage} alt="더보기" />
        </HeaderButton>
      </HeaderUI>
    ),

    back: (
      <HeaderUI>
        <HeaderButton onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </HeaderButton>
        {children && <h2>{children}</h2>}
      </HeaderUI>
    ),

    followers: (
      <FollowersHeaderUI>
        <HeaderButton onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </HeaderButton>
        {children && <h2>{children}</h2>}
        <HeaderTextP>Followers</HeaderTextP>
      </FollowersHeaderUI>
    ),

    followings: (
      <FollowingsHeaderUI>
        <HeaderButton onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </HeaderButton>
        {children && <h2>{children}</h2>}
        <HeaderTextP>Followings</HeaderTextP>
      </FollowingsHeaderUI>
    ),

    submitHeader: (
      <HeaderUI>
        <HeaderButton onClick={() => navigate(-1)}>
          <img src={backImage} alt="뒤로 가기" />
        </HeaderButton>
        {children}
      </HeaderUI>
    ),
  };

  return UI[type];
}

