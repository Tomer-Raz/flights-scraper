import styled from "styled-components";

export const StepsContainer = styled.div`
  box-sizing: border-box;
  background-color: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;  width: 85vw;
  color: white;
  justify-content: space-between;
  margin:30px auto;
  align-items:center;
  @media only screen and (max-width: 992px) {
    height:50px;
    padding-top:10px;
    position: fixed;
    top: 0;
    width: 100%;
    z-index:2;
    padding:15px;
  }
`;