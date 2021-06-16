import { MemberP, MemberDiv } from "./style";

const CardMember = ({member}) => {
    return (
        <MemberDiv>
            <MemberP><span>Name: </span>{member.username}</MemberP>
            <MemberP><span>Email: </span>{member.email}</MemberP>
        </MemberDiv>
    )
}
export default CardMember;