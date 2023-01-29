import{ ReactComponent as LinkedinIcon } from "../../../assets/sidebar/LinkedinIcon.svg";
import {
  MemberTitle,
  Member,
  ImgContainer,
  MemberContent,
  MemberImg
} from "./teamStyles";

export default function TeamMember({ member }:any) {
  return (
    <Member>
      <ImgContainer>
        <a href={member.in} target="_blank"><LinkedinIcon/></a>
        <MemberImg src={member.img} alt="" />
      </ImgContainer>
      <MemberTitle>{member.title}</MemberTitle>
      <MemberContent>{member.description}</MemberContent>
    </Member>
  );
}
