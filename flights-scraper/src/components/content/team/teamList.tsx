import { useState } from "react";
import TeamMember from "./teamMember";
import {
  TechnologiesButton,
  ButtonWrap,
} from "../technologies/technologiesStyles";
import { MainTitle } from "../clients/clientStyles";
import { TeamContainer, MembersContainer } from "./teamStyles";
import { MEMBERS } from "../../../constants";
import { TEAM_TITLE, TEAM_BTN_TXT } from "../../../constants/texts";

export default function TeamList() {
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  return (
    <TeamContainer>
      <div>
        <MainTitle>{TEAM_TITLE}</MainTitle>
      </div>
      <MembersContainer>
        {MEMBERS.slice(0, 3).map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
        {showAll &&
          MEMBERS.slice(3, MEMBERS.length + 1).map((member) => (
            <TeamMember key={member.id} member={member} />
          ))}
      </MembersContainer>
      <div>
        <ButtonWrap>
          {!showAll && (
            <TechnologiesButton onClick={toggleShowAll}>
              {TEAM_BTN_TXT}
            </TechnologiesButton>
          )}
        </ButtonWrap>
      </div>
    </TeamContainer>
  );
}
