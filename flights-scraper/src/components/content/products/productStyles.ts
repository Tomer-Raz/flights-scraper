import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 85vw;
  margin:auto;
  margin-top:10vh;
  @media only screen and (max-width: 980px){
    margin-top:5vh;
  }
  @media only screen and (max-width: 700px){
    margin-top:0;
  }
`;
export const ItemContainer = styled.div`
  width: 35vw;
  text-align: left;
  @media only screen and (max-width: 980px){
    width: 40vw;
    margin-top:5vh;
  }
  @media only screen and (max-width: 700px){
    width: inherit;
    margin-top:5vh;
  }
`;
export const ItemTitle = styled.h3`
  font-size: 25px;
  text-align: left;
  font-weight: 600;
  @media only screen and (max-width: 700px){
    text-align: center;
  }
`;
export const ItemSubTitle = styled.h3`
  font-size: 20px;
  font-weight: 400;
  text-align: left;
  color: #69efad;
`;
export const ItemContent = styled.p`
  font-size: 17px;
  text-align: left;
`;
export const ItemImg = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: flex-end;
  @media only screen and (max-width: 700px){
    margin:auto;
    Justify-content:center;
  }
`;

export const LineContainer = styled.div`
display: none;
@media only screen and (max-width: 700px){
    display: flex;
    height: 10vh;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;
}
`

export const ProductBannerWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: inherit;
text-align: left;
background-color: #607b8b1c;
padding: 15px 5px 12px 0;
border-bottom: 1px solid white;
`

export const ExploreProductBtn = styled.button`
color:white;
font-size: 15px;
background-color: transparent;
border:none;
margin-bottom: 10px;
`
