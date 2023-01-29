import { useState } from "react";
import{ ReactComponent as SidebarLogo } from "../../assets/header-container/SidebarLogo.svg";

import { HeaderContainer, SidebarIconWrap } from "./headerStyles";
import Sidebar from "../sidebar/sidebar";

const Header = () => {
  const [isSidebarShown, setIsSidebarShown] = useState(false);
  const toggleSidebar = () => setIsSidebarShown(!isSidebarShown);
  return (
    <div>
      <HeaderContainer>
        <SidebarIconWrap>
          <SidebarLogo onClick={toggleSidebar} />
        </SidebarIconWrap>
      </HeaderContainer>
      <Sidebar isSidebarShown={isSidebarShown} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
