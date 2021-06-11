import { GoalDiv } from "./style";

const CardGoal = ({goal}) => {
    return (
        <GoalDiv>
            <p><span>Title:</span> {goal.title}</p>
            <p><span>Difficulty:</span> {goal.difficulty}</p>
            <p><span>Achieved:</span> {goal.achieved ? "yes" : "no"}</p>
            <p><span>How much achieved</span> {goal.how_much_achieved}</p>
        </GoalDiv>
    )
}

export default CardGoal