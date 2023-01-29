import {
  FormContainer,
  Input,
  TextArea,
  Title,
  SecondTitle,
  Form,
  FormButton,
  FormBtnWrapper,
} from "./contactFormStyles";
import { FORM_TITLE_TXT, FORM_SUB_TXT, FORM_BTN_TXT } from "../../../constants/texts";

export default function ContactForm() {
  return (
    <div className="form-wrap">
      <FormContainer>
        <Title>{FORM_TITLE_TXT}</Title>
        <SecondTitle>{FORM_SUB_TXT}</SecondTitle>
        <Form>
          <div>
            <Input type="text" placeholder="Full name" name="name"></Input>
          </div>
          <div>
            <Input type="email" placeholder="Email" name="email"></Input>
          </div>
          <div>
            <Input type="text" placeholder="Subject" name="subject"></Input>
          </div>
          <div>
            <TextArea
              placeholder="How can we help?"
              name="message"
              id=""
            ></TextArea>
          </div>
        </Form>
        <FormBtnWrapper>
          <FormButton>{FORM_BTN_TXT}</FormButton>
        </FormBtnWrapper>
      </FormContainer>
    </div>
  );
}
