import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  display: ${(props) => props.title};
  background: 55% 60% no-repeat padding-box, rgba(0, 0, 0, 0.4);
  height: 100vh;
  backdrop-filter: blur(20px);
`;

export const LinksContainer = styled.div`
  width: 100vw;
`;

export const CloseBtnContainer = styled.div`
  display: flex;
  justify-content: right;
  padding: 50px;
`;

export const LinksWrap = styled.ul`
  list-style-type: none;
  padding: 0px;
  cursor: pointer;
`;
export const LinkWrap = styled.li`
  margin: 40px;
`;

export const SidebarTitle = styled.h4`
color: white;
  font-size: 20px;
`;
