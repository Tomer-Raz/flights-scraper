import styled from "styled-components";
import { GridContainerA } from "./techAStyles";

export const GridContainerB = styled(GridContainerA)`
  grid-template-columns: var(--base) calc(var(--base) * 1.5) var(--base);
  grid-template-rows: repeat(5, var(--base));
  @media only screen and (max-width: 980px) {
    margin-top: 0;
    grid-template-columns: repeat(3, var(--tablet));
    grid-template-rows:
      var(--tablet) var(--tablet) calc(var(--tablet) * 1.5) var(--tablet)
      var(--tablet);
    height: calc(3 * var(--tablet));
  }
  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(3, var(--mobile));
    grid-template-rows:
      var(--mobile) var(--mobile) calc(var(--mobile) * 1.5) var(--mobile)
      var(--mobile);
    height: calc(3 * var(--mobile));
  }
`;
