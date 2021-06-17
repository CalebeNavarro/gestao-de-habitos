import { 
    GoalDiv, 
    ButtonsDiv,
    RemoveGoalButton, 
    UpdateAchievedDiv, 
    UpdateAchievedButton
} from "./style";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

const CardGoal = ({goal, getGroups}) => {
    const [ value, setValue ] = useState(goal.how_much_achieved)
    const [token] = useState(JSON.parse(localStorage.getItem("@habits:token")));
    const [showUpdateGoalDiv, setShowUpdateGoalDiv] = useState(false);

    const handleRemoveGoal = (id) => {
        api.delete(`/goals/${id}/`,{
            headers: {
                Authorization: `Bearer ${token}`
        }})
        .then(response => getGroups())
        .catch(error => console.log(error));
    };

    const handleUpdateGoal = (id) => {
        const data = {};
        if (value === "100") {
            data.how_much_achieved = value;
            data.achieved = true;
        } else {
            data.how_much_achieved = value;
            data.achieved = false;
        }

        api.patch(`/goals/${id}/`, data , {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            getGroups();
            toast.success(`Congratulations, Your ${goal.title} is done!`);
        })
        .catch(error => console.log(error.response))
    }

    return (
        <GoalDiv display={goal.achieved.toString()}>
            <p><span>Title:</span> {goal.title}</p>
            <p><span>Difficulty:</span> {goal.difficulty}</p>
            <p><span>Achieved:</span> {goal.achieved ? "yes" : "no"}</p>
            <p><span>How much Achieved: </span>{goal.how_much_achieved}%</p>
            <ButtonsDiv>
                {goal.achieved === false 
                && <UpdateAchievedButton onClick={() => setShowUpdateGoalDiv(!showUpdateGoalDiv)}>
                        Update achieved
                    </UpdateAchievedButton>
                }
                <RemoveGoalButton onClick={() => handleRemoveGoal(goal.id)}>
                    Remove goal    
                </RemoveGoalButton>
            </ButtonsDiv>
            {showUpdateGoalDiv 
            &&  <UpdateAchievedDiv display={goal.achieved.toString()}>
                    <input type='range' value={value} onChange={(evt) => setValue(evt.currentTarget.value)}/> 
                    <button onClick={() => handleUpdateGoal(goal.id)}>{value}%</button>
                </UpdateAchievedDiv>
            }
        </GoalDiv>
    )
}

export default CardGoal