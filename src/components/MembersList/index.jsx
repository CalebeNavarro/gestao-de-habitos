import CardMember from "../CardMember";
import { MembersListDiv } from "./style";

const MembersList = ({ members }) => {
  return (
    <MembersListDiv>
      {members.map((member) => (
        <CardMember key={member.id} member={member} />
      ))}
    </MembersListDiv>
  );
};

export default MembersList;
