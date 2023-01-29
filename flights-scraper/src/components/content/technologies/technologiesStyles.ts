import styled from "styled-components";

export const MainTechnologiesContainer = styled.div`
  margin-top: 20vh;
`;
export const TechContainer = styled.div`
  display: flex;
  margin: auto;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 80vw;
  @media only screen and (max-width: 980px) {
    flex-direction: column;
    height: fit-content;
    
  }
`;

export const TechnologiesButton = styled.button`
  background-color: transparent;
  padding: 15px;
  border: 1px solid #8c65ed;
  color: white;
  margin-top: 10vh;
  font-size: 17px;
  cursor:pointer;
`;

export const ButtonWrap = styled.div`
position:relative;
width: 100vw;
`
