import { useState } from "react";
import { TECHNOLOGYS_GROUPS } from "../../../constants";
import {
  TECH_BTN_TXT,
  TECH_TITLE,
} from "../../../constants/texts";
import TechA from "./techA";
import TechB from "./techB";
import { TechnologiesButton } from "./technologiesStyles";
import { MainTitle } from "../clients/clientStyles";
import {
  MainTechnologiesContainer,
  TechContainer,
  ButtonWrap,
} from "./technologiesStyles";

export default function Technologies() {
  const [showAll, setShowAll] = useState(false);
  const toggelShowAll = () => {
    setShowAll(!showAll);
  };
  const getCmpTypeById = (group: any) => {
    return (group.id + 1) % 2 === 0 ? (
      <TechB key={group.id} group={group} />
    ) : (
      <TechA key={group.id} group={group} />
    );
  };
  return (
    <MainTechnologiesContainer>
      <div>
        <MainTitle>{TECH_TITLE}</MainTitle>
      </div>
      <TechContainer>
        {TECHNOLOGYS_GROUPS.slice(0, 3).map((group: any) =>
          getCmpTypeById(group)
        )}
      </TechContainer>
      <TechContainer>
        {showAll &&
          TECHNOLOGYS_GROUPS.slice(3, TECHNOLOGYS_GROUPS.length + 1).map(
            (group: any) => getCmpTypeById(group)
          )}
      </TechContainer>
      <ButtonWrap>
        {!showAll && (
          <TechnologiesButton onClick={toggelShowAll}>
            {TECH_BTN_TXT}
          </TechnologiesButton>
        )}
      </ButtonWrap>
    </MainTechnologiesContainer>
  );
}
