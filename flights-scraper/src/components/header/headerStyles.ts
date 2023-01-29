import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 85vw;
  color: white;
  justify-content: space-between;
  margin:auto;
  align-items:center;
  padding-top:10px;
  @media only screen and (max-width: 992px) {
    position: fixed;
    top: 0;
    background-color: #232222;
    width: 100%;
    z-index:2;
    padding:5px 10px;
  }
`;

export const SidebarIconWrap = styled.div`
visibility:hidden;
@media only screen and (max-width: 992px) {
  visibility: visible;
}
`
