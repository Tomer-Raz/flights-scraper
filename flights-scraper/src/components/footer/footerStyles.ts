import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 70vw;
  margin: auto;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 5vh;
  margin-top: 20vh;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 980px) {
    width: 85vw;
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
    flex-wrap: wrap;
  }
`;
export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 15vh;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 980px) {
    width: 30vw;
  }
  @media only screen and (max-width: 480px) {
    height: 10vh;
  }
`;
export const FooterSecLine = styled(FooterItem)`
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

export const WhiteContent = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: #fff;
  @media only screen and (max-width: 980px) {
    font-size: 12px;
  }
`;
export const GreenContent = styled(WhiteContent)`
  color: #69efad;
`;
export const LogoItem = styled.div`
  display: flex;
  max-width:20vw;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    max-width:40vw;
    margin-top: 5vh;
    background-image: none;
    background: radial-gradient(
      closest-side at 50% 50%,
      #6A42D1 0%,
      #23222200 100%
    );
  }
`;
