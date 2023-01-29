import { useState } from "react";
import TechIcon from "./technologyIcon";
import {
  GridCell,
  GridFull,
  GridTopBottom,
  GridLeftRight,
  GridLeft,
  GridTxt,
} from "./techAStyles";
import {
  GridContainerB,
} from "./techBStyles";

export default function TechB({ group }:any) {
  const { title, items } = group;
  const [showAllTechs, setShowAllTechs] = useState(false);
  const showExtraTechs = () => {
    setShowAllTechs(true);
  };
  return (
    <GridContainerB>
      <GridCell />
      <GridLeft />
      <GridCell />
      <GridCell>{(items[4]&&showAllTechs) && <TechIcon item={items[4]} />}</GridCell>
      <GridLeftRight>
        <TechIcon item={items[0]} />
      </GridLeftRight>
      <GridCell>{(items[6]&&showAllTechs) && <TechIcon item={items[6]} />}</GridCell>
      <GridTopBottom>
        <TechIcon item={items[1]} />
      </GridTopBottom>
      <GridFull>
        <GridTxt  onMouseOver={showExtraTechs}>{title}</GridTxt>
      </GridFull>
      <GridTopBottom>
        <TechIcon item={items[2]} />
      </GridTopBottom>
      <GridCell>{(items[7]&&showAllTechs) && <TechIcon item={items[7]} />}</GridCell>
      <GridLeftRight>
        <TechIcon item={items[3]} />
      </GridLeftRight>
      <GridCell>{(items[5]&&showAllTechs) && <TechIcon item={items[5]} />}</GridCell>
      <GridCell />
      <GridLeft />
      <GridCell />
    </GridContainerB>
  );
}
