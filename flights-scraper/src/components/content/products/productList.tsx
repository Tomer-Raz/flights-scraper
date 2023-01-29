import ProductPreview from "./productPreview";
import { ItemsContainer } from "./productStyles";
import { PRODUCTS } from "../../../constants";

export default function ServicesList() {
  return (
    <ItemsContainer>
      {PRODUCTS.map((product) => (
        <ProductPreview key={product.id} product={product} />
      ))}
    </ItemsContainer>
  );
}
