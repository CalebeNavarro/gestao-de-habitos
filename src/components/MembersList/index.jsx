import CardMember from "../CardMember";
import { MembersListDiv, Title } from "./style";

const MembersList = ({ members }) => {
  return (
    <>
    <Title>Members list</Title>
    <MembersListDiv>
   
      {members.map((member) => (
        <CardMember key={member.id} member={member} />
      ))}
    </MembersListDiv>
    </>
  );
};

export default MembersList;
