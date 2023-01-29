import styled from "styled-components";
import triangles from "../../../assets/clients/triangles.svg";
import { ItemContent } from "../products/productStyles";

export const ClientsWrapper = styled.div`
  color: #060a1f;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${triangles}),
    radial-gradient(closest-side at 60% 50%, #422e9a -20%, #23222200 100%);
  background-repeat: no-repeat;
  background-position: 75% 100%;
  @media only screen and (max-width: 980px) {
    background-image: none;
    background: radial-gradient(
      closest-side at 50% 60%,
      #422e9a 0%,
      #23222200 100%
    );
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
