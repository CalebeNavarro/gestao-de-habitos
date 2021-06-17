import { MemberP, MemberDiv } from "./style";

const CardMember = ({ member }) => {
  return (
    <MemberDiv>
      <MemberP>
        <span>Username: </span>
        {member.username}
        </MemberP>

      <MemberP>
        <span>E-mail: </span>
        {member.email}
      </MemberP>
    </MemberDiv>
  );
};
export default CardMember;
