import { useLocation } from "react-router-dom";
import homeIcon from "../../../assets/images/IconHome.png";
import fillHomeIcon from "../../../assets/images/FillIconHome.png";
import searchIcon from "../../../assets/images/IconSearch.png";
import fillSearchIcon from "../../../assets/images/FillIconSearch.png";
import editIcon from "../../../assets/images/IconEdit.png";
import fillEditIcon from "../../../assets/images/FillIconEdit.png";
import userIcon from "../../../assets/images/IconUser.png";
import fillUserIcon from "../../../assets/images/FillIconUser.png";
import { NavWrapper, NavLink, StyledNavText } from './FooterMenuStyle';

export default function Navigation() {
  const location = useLocation();

  return (
    <NavWrapper>
      <NavLink
        to="/home"
        className={`nav-link ${location.pathname === "/home" ? "active" : ""}`}
      >
        <img
          src={location.pathname === "/home" ? fillHomeIcon : homeIcon}
          alt="홈"
          width="24px"
        />
        <StyledNavText>홈</StyledNavText>
      </NavLink>

      <NavLink
        to="/search"
        className={`nav-link ${
          location.pathname === "/search" ? "active" : ""
        }`}
      >
        <img
          src={location.pathname === "/search" ? fillSearchIcon : searchIcon}
          alt="검색"
          width="24px"
        />
        <StyledNavText>검색</StyledNavText>
      </NavLink>

      <NavLink
        to="/post/upload"
        className={`nav-link ${
          location.pathname === "/post/upload" ? "active" : ""
        }`}
      >
        <img
          src={location.pathname === "/post/upload" ? fillEditIcon : editIcon}
          alt="작성"
          width="24px"
        />
        <StyledNavText>게시물 작성</StyledNavText>
      </NavLink>

      <NavLink
        // eslint-disable-next-line no-undef
        to="/profile/accountname"
        className={`nav-link ${
          location.pathname === "/profile/accountname" ? "active" : ""
        }`}
      >
        <img
          src={
            location.pathname === "/profile/accountname"
              ? fillUserIcon
              : userIcon
          }
          alt="프로필"
          width="24px"
        />
        <StyledNavText>프로필</StyledNavText>
      </NavLink>
    </NavWrapper>
  );
}

