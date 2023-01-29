import {
  ItemContainer,
  ItemTitle,
  ItemSubTitle,
  ItemContent,
  ItemImg,
  LineContainer,
} from "./productStyles";
import{ ReactComponent as WhiteLine } from "../../../assets/main/whiteLine.svg";
import ProductBanner from "./productBanner";

export default function ProductPreview({ product }: any) {
  return (
    <ItemContainer>
      <ItemImg>
        <img src={product.icon} alt="" />
      </ItemImg>
      <ItemTitle> {product.title}</ItemTitle>
      <ItemSubTitle>{product.subTitle}</ItemSubTitle>
      <ItemContent>{product.content}</ItemContent>
      <ProductBanner productLogo={product.logo}/>
      <LineContainer><WhiteLine height="100%" preserveAspectRatio="none"/></LineContainer>
    </ItemContainer>
  );
}
