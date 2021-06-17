import { StyledButton, TriangleClosedDiv, TriangleOpenedDiv } from "./style";
import { IoMdPlay } from "react-icons/io";

const ActivitiesButton = ({activitiesDivOpened, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {activitiesDivOpened
            ?   <TriangleOpenedDiv>
                    <IoMdPlay />
                </TriangleOpenedDiv>
            :   <TriangleClosedDiv>
                    <IoMdPlay />
                </TriangleClosedDiv> 
            }
            Activities
        </StyledButton>
    )
}

export default ActivitiesButton;