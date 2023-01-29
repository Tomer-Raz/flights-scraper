import styled from "styled-components";
import { ExploreText, ExploreWrapper } from "../main/mainStyles";
import { purpleLeft, purpleRight, greenLeft, greenRight } from "../../../assets";

export const FormContainer = styled.div`
  margin: 15vh 0;
  background-image: url(${purpleLeft}), url(${greenLeft}), url(${purpleRight}), url(${greenRight});
  background-position-x: -10%, 0%, 80%, 120%;
  background-position-y: 80%, 0%, 20%, 40%;
  background-size: 30vw, 40vw, 30vw, 40vw;
  background-repeat: no-repeat;
  @media only screen and (max-width: 980px) {
    background-image: none;
  }
`;
export const Input = styled.input`
  font-family: inherit;
  width: 330px;
  height: 51px;
  font-size: 17px;
  background-color: #607b8b1c;
  border: none;
  margin-bottom: 10px;
  color: #ffffff;
  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 3px white;
    -moz-box-shadow: 0 0 3px white;
    -webkit-box-shadow: 0 0 3px white;
  }
  ::placeholder {
    color: #ffffff;
  }
  @media only screen and (max-width: 350px) {
    width: 85vw;
  }
`;

export const TextArea = styled.textarea`
  color: white;
  width: 330px;
  background-color: #607b8b1c;
  min-height: 36vh;
  resize: none;
  font-family: inherit;
  border: none;
  font-size: 17px;
  &:focus {
    outline: none;
    border-color: white;
    box-shadow: 0 0 3px white;
    -moz-box-shadow: 0 0 3px white;
    -webkit-box-shadow: 0 0 3px white;
  }
  ::placeholder {
    color: #ffffff;
  }
  @media only screen and (max-width: 350px) {
    width: 85vw;
  }
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 0;
`;

export const SecondTitle = styled(Title)`
  color: #69efad;
  margin-top: 0;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  margin: auto;
`;

export const FormButton = styled(ExploreText)`
  background-color: transparent;
  border: 1px solid #ffffff;
  margin: 0;
  color: #69efad;
  width: 220px;
  cursor:pointer;
  @media only screen and (max-width: 350px) {
    width: 50vw;
  }
`;

export const FormBtnWrapper = styled(ExploreWrapper)`
  margin: 10px 0px 50px 0px;
`;
