import styled from "styled-components";

export const MainWrapper = styled.div`
  opacity: 1;
  color: #060a1f;
`;

export const MainTitle = styled.h1`
  font-family: "ImportedBold";
  text-align: center;
  margin: auto;
  margin-top: 12vh;
  margin-bottom: 5vh;
  font-size: 5vw;
  @media only screen and (max-width: 980px) {
    margin-top: 120px;
  }
  @media only screen and (max-width: 680px) {
    font-size: 50px;
    margin-top: 100px;
  }
`;

export const Intro = styled.p`
  font-family: "ImportedMedium";
  margin-top: 20px;
  text-align: center;
  margin: auto;
  padding-top: 20px;
  font-size: 2vw;
  @media only screen and (max-width: 680px) {
    font-size: 25px;
    max-width: 90%;
  }
`;
export const Span = styled.span`
  margin-top: 20px;
  @media only screen and (max-width: 680px) {
    min-width: 90%;
    content: "\A";
    white-space: pre;
  }
`;

export const ExploreWrapper = styled.div`
  font-family: "ImportedMedium";
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: 350px;
  padding-bottom: 30px;
  opacity: 1;
`;

export const ExploreText = styled.div`
  text-align: center;
  letter-spacing: 0px;
  font-family: "ImportedMedium";
  color: #060a1f;
  opacity: 1;
  letter-spacing: 0.4px;
  border: 1px solid #ffffff;
  padding: 15px 20px 15px 20px;
  cursor: pointer;
`;
