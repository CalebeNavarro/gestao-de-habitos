import {GoalsDiv, GoalsNameDiv, GoalsListDiv, SpaceDiv} from "./style";
import GoalsButton from "../../components/GoalsButton";
import CardGoal from "../CardGoal";
import Button from "../Button";

const GoalsList = ({goalsDivOpened, setGoalsDivOpened, goals, setGoalsModalOpened}) => {
    return (
        <GoalsDiv>
            <GoalsButton
                onClick={() => setGoalsDivOpened(!goalsDivOpened)}
                goalsDivOpened={goalsDivOpened}
            /> 
            <GoalsNameDiv>Goals</GoalsNameDiv>
            <GoalsListDiv goalsDivOpened={goalsDivOpened}>
                {goals && goals.map((goal) => <CardGoal goal={goal} key={goal.id}/>)}
            </GoalsListDiv>
            <SpaceDiv></SpaceDiv>
            <Button widthMobile="300" func={() => setGoalsModalOpened(true)}> 
                Create new Goal 
            </Button>
        </GoalsDiv>
    )
}

export default GoalsList;