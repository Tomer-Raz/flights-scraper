import styled from "styled-components";

export const HeaderContainer = styled.div`
    height:0px;
  display: flex;
  box-sizing: border-box;
  width: 85vw;
  color: white;
  justify-content: space-between;
  margin:auto;
  align-items:center;
  @media only screen and (max-width: 992px) {
    height:50px;
    padding-top:10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:2;
    padding:15px;
  }
`;

export const SidebarIconWrap = styled.div`
visibility:hidden;
@media only screen and (max-width: 992px) {
  visibility: visible;
}
`
