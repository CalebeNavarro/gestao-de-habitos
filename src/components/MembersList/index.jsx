import CardMember from "../CardMember";
import { MembersListDiv } from "./style";

const MembersList = ({members}) => {
    return (
        <MembersListDiv>
            {members && members.map((member) => <CardMember member={member}/>)}
        </MembersListDiv>
    )
}

export default MembersList;