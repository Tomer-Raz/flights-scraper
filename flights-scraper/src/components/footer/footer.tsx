import{ ReactComponent as VegvizerLogo } from "../../assets/header-container/vegvizerLogo.svg";
import {
  FooterContainer,
  LogoItem,
} from "./footerStyles";

export default function Footer() {
  return (
    <FooterContainer>
      <LogoItem>
        <VegvizerLogo />
      </LogoItem>
    </FooterContainer>
  );
}
