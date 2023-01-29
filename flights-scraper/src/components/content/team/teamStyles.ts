import styled from "styled-components";
import { ItemsContainer } from "../products/productStyles";

export const TeamContainer = styled(ItemsContainer)`
  justify-content: center;
  margin-top: 20vh;
  @media only screen and (max-width: 980px) {
    width: 90vw;
  }
`;

export const MembersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 3vw;
  text-align: left;
  margin: auto;
  width: 80vw;
  @media only screen and (max-width: 620px) {
    width: 90vw;
    div:nth-of-type(2n) {
      margin-left: auto;
      margin-right: 0;
      p,
      h2:nth-of-type(2n + 1) {
        text-align: right;
      }
      div:nth-of-type(2n + 1) {
        margin-left: auto;
        margin-right: 0;
      }
    }
    div:nth-of-type(2n + 1) {
      margin-left: 0;
      margin-right: auto;
    }
    div:nth-of-type(2n) {
      div:nth-of-type(2n + 1) {
        flex-direction: row-reverse;
      }
    }
  }
`;

export const Member = styled.div`
  dispaly: flex;
  flex-direction: row;
  width: 20vw;
  @media only screen and (max-width: 980px) {
    width: 30vw;
  }
  @media only screen and (max-width: 620px) {
    width: 80vw;
  }
`;
export const MemberTitle = styled.h2`
  font-size: 17px;
  font-weight: 600;
  margin: 1vh 0 3vh 0;
`;

export const ImgContainer = styled.div`
  border-bottom: 2px solid #69efad;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media only screen and (max-width: 620px) {
    width: 70vw;
  }
`;

export const MemberContent = styled.p`
  font-size: 17px;
`;

export const MemberImg = styled.img`
width:50%;
height:50%;
`
