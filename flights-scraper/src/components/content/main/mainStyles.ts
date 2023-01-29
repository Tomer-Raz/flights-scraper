import styled from "styled-components";
import {greenAndPurpleFlares} from "../../../assets";

export const MainWrapper = styled.div`
  opacity: 1;
`;

export const MainTitle = styled.h1`
  color: #060a1f;
  font-family: "ImportedRegular";
  text-align: center;
  margin: auto;
  margin-top: 12vh;
  margin-bottom: 5vh;
  font-size: 60px;
  @media only screen and (max-width: 980px) {
    margin-top: 120px;
  }
  @media only screen and (max-width: 680px) {
    font-size: 50px;
    margin-top: 100px;
  }
`;

export const Intro = styled.p`
text-align: center;
margin:auto;
font-size: 22px;
max-width: 80%;
@media only screen and (max-width:680px) {
  font-size: 17px;
  max-width: 80%;
}
`
export const Span = styled.span`
@media only screen and (max-width: 680px) {
  min-width:90%;
  content: "\A";
  white-space: pre;
}
`

export const ExploreWrapper = styled.div`
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent url(${greenAndPurpleFlares}) 50% 100% no-repeat
    padding-box;
  background-size: 350px;
  padding-bottom: 30px;
  opacity: 1;
`;

export const ExploreText = styled.div`
  text-align: center;
  font: normal normal 500 16px/23px Montserrat;
  letter-spacing: 0px;
  color: #69efad;
  opacity: 1;
  letter-spacing: 0.4px;
  border: 1px solid #ffffff;
  padding: 15px 20px 15px 20px;
  cursor:pointer;
`;
