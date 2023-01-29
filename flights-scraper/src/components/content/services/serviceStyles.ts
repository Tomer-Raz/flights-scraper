import styled from "styled-components";
import {ItemContainer} from "../products/productStyles"

export const ServiceItemContainer = styled(ItemContainer)`
  width: 25vw;
  @media only screen and (max-width: 700px){
    width: 90vw;
    margin-top:5vh;
  }
`;
