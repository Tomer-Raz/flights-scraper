import { useState } from "react";
import TechIcon from "./technologyIcon";
import {
  GridContainerA,
  GridCell,
  GridFull,
  GridTopBottom,
  GridLeftRight,
  GridRight,
  GridTop,
  GridBottom,
  GridTxt,
} from "./techAStyles";

export default function TechA({ group }: any) {
  const { title, items } = group;
  const [showAllTechs, setShowAllTechs] = useState(false);
  const showExtraTechs = () => {
    setShowAllTechs(true);
  };
  return (
    <GridContainerA>
      <GridCell />
      <GridCell />
      <GridRight />
      <GridCell />
      <GridCell />
      <GridCell />
      <GridCell>
        {items[4] && showAllTechs && <TechIcon item={items[4]} />}
      </GridCell>
      <GridLeftRight>
        <TechIcon item={items[0]} />
      </GridLeftRight>
      <GridCell>
        {items[6] && showAllTechs && <TechIcon item={items[6]} />}
      </GridCell>
      <GridCell />
      <GridTop />
      <GridTopBottom>
        <TechIcon item={items[1]} />
      </GridTopBottom>
      <GridFull>
        <GridTxt onMouseOver={showExtraTechs}>
          {title}
        </GridTxt>
      </GridFull>
      <GridTopBottom>
        <TechIcon item={items[2]} />
      </GridTopBottom>
      <GridBottom />
      <GridCell />
      <GridCell>
        {items[7] && showAllTechs && <TechIcon item={items[7]} />}
      </GridCell>
      <GridLeftRight>
        <TechIcon item={items[3]} />
      </GridLeftRight>
      <GridCell>
        {items[5] && showAllTechs && <TechIcon item={items[5]} />}
      </GridCell>
      <GridCell />
      <GridCell />
      <GridCell />
      <GridRight />
      <GridCell />
      <GridCell />
    </GridContainerA>
  );
}
