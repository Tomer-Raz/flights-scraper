import ServiceItem from "./servicePreview";
import { ItemsContainer } from "../products/productStyles";
import { ExploreText, ExploreWrapper } from "../main/mainStyles";
import { Link } from "react-scroll";
import { SERVICES } from "../../../constants";
import { TALK_BTN_TXT } from "../../../constants/texts";

export default function ServicesList() {
  return (
    <div>
      <ItemsContainer>
        {SERVICES.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </ItemsContainer>
      <ExploreWrapper>
        <Link
          to="ContactForm"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <ExploreText>{TALK_BTN_TXT}</ExploreText>
        </Link>
      </ExploreWrapper>
    </div>
  );
}
