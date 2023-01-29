import styled from "styled-components";
import { ItemContent } from "../products/productStyles";

export const ClientsWrapper = styled.div`
  color: #060a1f;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 980px) {
    background-image: none;
  }
`;
export const ClientContainer = styled.div`
  margin: auto;
  width: 50vw;
  text-align: left;
  margin-top: 20vh;
  @media only screen and (max-width: 980px) {
    width: 50vw;
  }
  @media only screen and (max-width: 480px) {
    width: 85vw;
  }
`;
export const ClientViewList = styled.div`
  display: flex;
  width: 30vw;
  gap: 30px;
  align-items: center;
  @media only screen and (max-width: 980px) {
    gap: 10px;
  }
  @media only screen and (max-width: 480px) {
    gap: 5px;
  }
`;

export const ClientContent = styled(ItemContent)`
  width: 30vw;
  @media only screen and (max-width: 980px) {
    width: auto;
  }
`;

export const Author = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: #9460f5;
`;

export const ArrowBtn = styled.button`
  background-color: transparent;
  color: #ffffff;
  font-size: 20px;
  border: none;
  cursor:pointer;
`;

export const MainTitle = styled.h2`
  text-align: center;
  margin: auto;
  margin-bottom: 0;
  margin-bottom: 10vh;
  font-size: 30px;
`;
// export const MainTitle2 = styled(MainTitle1)`
//   margin-bottom: 10vh;
// `;

export const Client = styled.div`
  display: flex;
  width: 75px;
  height: 75px;
  cursor:pointer;
  &:hover{
    filter: brightness(140%);
  }
`;

export const ClientOff = styled.div`
  filter: brightness(50%);
`;
