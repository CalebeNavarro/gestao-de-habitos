import { StyledButton, TriangleClosedDiv, TriangleOpenedDiv } from "./style";
import { IoMdPlay } from "react-icons/io";

const GoalsButton = ({goalsDivOpened, onClick}) => {
    return (
        <StyledButton onClick={onClick}>
            {goalsDivOpened
            ?   <TriangleOpenedDiv>
                    <IoMdPlay />
                </TriangleOpenedDiv>
            :   <TriangleClosedDiv>
                    <IoMdPlay />
                </TriangleClosedDiv> 
            }
            Goals
        </StyledButton>
    )
}

export default GoalsButton;