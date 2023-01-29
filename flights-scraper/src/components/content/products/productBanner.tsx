import {
  ProductBannerWrap,
  ExploreProductBtn,
} from "./productStyles";
import { EXPLORE_TXT } from "../../../constants/texts";

export default function ProductBanner({ productLogo }:any) {
  return (
    <ProductBannerWrap>
      <img src={productLogo} alt="" />
      <ExploreProductBtn>{EXPLORE_TXT}</ExploreProductBtn>
    </ProductBannerWrap>
  );
}
