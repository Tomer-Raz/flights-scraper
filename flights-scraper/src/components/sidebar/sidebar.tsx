import { Link } from "react-scroll";
import{ ReactComponent as Xsvg } from "../../assets/sidebar/X.svg";
import{ ReactComponent as LinkedinIcon } from "../../assets/sidebar/LinkedinIcon.svg";
import{ ReactComponent as VegvizerLogoSidebar } from "../../assets/sidebar/VegvizerLogoSidebar.svg";

import {
  SidebarContainer,
  LinksContainer,
  CloseBtnContainer,
  LinksWrap,
  LinkWrap,
  SidebarTitle,
} from "./sidebarStyles";

const Sidebar = (props: any) => {
  const { isSidebarShown, toggleSidebar } = props;
  return (
    <SidebarContainer title={isSidebarShown ? "flex" : "none"}>
      <LinksContainer>
        <CloseBtnContainer>
          <Xsvg onClick={toggleSidebar} />
        </CloseBtnContainer>
        <VegvizerLogoSidebar />
        <LinksWrap>
          <LinkWrap>
            <Link
              to="ServicesList"
              className="sidebar-link"
              onClick={toggleSidebar}
              spy={true}
              smooth={true}
              offset={-50}
              duration={1200}
            >
              <SidebarTitle>Services</SidebarTitle>
            </Link>
          </LinkWrap>
          <LinkWrap>
            <Link
              to="ClientList"
              className="sidebar-link"
              onClick={toggleSidebar}
              spy={true}
              smooth={true}
              offset={0}
              duration={1200}
            >
              <SidebarTitle>Clients</SidebarTitle>
            </Link>
          </LinkWrap>
          <LinkWrap>
            <Link
              to="Technologies"
              className="sidebar-link"
              onClick={toggleSidebar}
              spy={true}
              smooth={true}
              offset={-80}
              duration={1200}
            >
              <SidebarTitle>Technologies</SidebarTitle>
            </Link>
          </LinkWrap>
          <LinkWrap>
            <Link
              to="PageHeaderContainer"
              spy={true}
              smooth={true}
              offset={-80}
              onClick={toggleSidebar}
              duration={1200}
              className="sidebar-link"
            >
              <SidebarTitle>About</SidebarTitle>
            </Link>
          </LinkWrap>
          <LinkWrap>
            <Link
              to="ContactForm"
              spy={true}
              smooth={true}
              offset={-80}
              onClick={toggleSidebar}
              duration={1200}
              className="sidebar-link"
            >
              <SidebarTitle>Contact</SidebarTitle>
            </Link>
          </LinkWrap>
          <LinkWrap>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://il.linkedin.com/company/vevizer?trk=public_profile_topcard-current-company"
            >
              <LinkedinIcon />
            </a>
          </LinkWrap>
        </LinksWrap>
      </LinksContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
