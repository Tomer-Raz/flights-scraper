import { Link } from "react-scroll";
import{ ReactComponent as WhiteLine } from "../../../assets/main/whiteLine.svg";
import {
  MainWrapper,
  MainTitle,
  Intro,
  Span,
  ExploreWrapper,
  ExploreText,
} from "./mainStyles";
import {
  GREET_TXT,
  INTRO_TXT1,
  INTRO_TXT2,
  INTRO_TXT3,
  EXPLORE_BTN_TXT,
} from "../../../constants/texts";
import{ ReactComponent as VegvizerLogo } from "../../../assets/header-container/vegvizerLogo.svg";

const Main = () => {
  return (
    <MainWrapper>
      <MainTitle>{GREET_TXT}</MainTitle>
      <VegvizerLogo/>
      <Intro style={{marginTop:'20px'}}>
        {INTRO_TXT1} <Span>{INTRO_TXT2}</Span>
      </Intro>
      <Intro>{INTRO_TXT3}</Intro>
      <ExploreWrapper>
        <Link
          to="ServicesList"
          spy={true}
          smooth={true}
          offset={-50}
          duration={800}
        >
          <ExploreText>{EXPLORE_BTN_TXT}</ExploreText>
        </Link>
      </ExploreWrapper>
      <WhiteLine style={{ marginTop: "-40px" }} />
    </MainWrapper>
  );
};

export default Main;
