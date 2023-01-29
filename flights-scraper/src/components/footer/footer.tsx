import{ ReactComponent as WhiteLine } from "../../assets/main/whiteLine.svg";
import{ ReactComponent as VegvizerLogo } from "../../assets/header-container/vegvizerLogo.svg";
import {
  FooterContainer,
  FooterItem,
  FooterSecLine,
  WhiteContent,
  GreenContent,
  LogoItem,
} from "./footerStyles";
import { CALL_TXT, PHONE_NUM, FIND_TXT, ADDRESS } from "../../constants/texts";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterItem>
        <WhiteContent>{CALL_TXT}</WhiteContent>
        <GreenContent>{PHONE_NUM}</GreenContent>
      </FooterItem>
      <FooterItem>
        <WhiteLine height="100%" preserveAspectRatio="none" />
      </FooterItem>
      <FooterItem>
        <WhiteContent>{FIND_TXT}</WhiteContent>
        <GreenContent>{ADDRESS}</GreenContent>
      </FooterItem>
      <FooterSecLine>
        <WhiteLine height="100%" preserveAspectRatio="none" />
      </FooterSecLine>
      <LogoItem>
        <VegvizerLogo />
      </LogoItem>
    </FooterContainer>
  );
}
