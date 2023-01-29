import { ServiceItemContainer } from "./serviceStyles";
import {
  ItemTitle,
  ItemSubTitle,
  ItemContent,
  ItemImg,
  LineContainer,
} from "../products/productStyles";
import{ ReactComponent as WhiteLine } from "../../../assets/main/whiteLine.svg";


export default function ServiceItem({ service }: any) {
  return (
    <ServiceItemContainer>
      <ItemImg>
        <img src={service.img} alt="" />
      </ItemImg>
      <ItemTitle>{service.title}</ItemTitle>
      <ItemSubTitle>{service.subTitle}</ItemSubTitle>
      <ItemContent>{service.content}</ItemContent>
      <LineContainer>
        <WhiteLine height="100%" preserveAspectRatio="none" />
      </LineContainer>
    </ServiceItemContainer>
  );
}
