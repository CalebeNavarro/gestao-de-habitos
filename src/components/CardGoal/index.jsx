import { GoalDiv, ButtonsDiv,RemoveGoalButton, UpdateGoalButton, UpdateGoalDiv, UpdateGoalSelectDiv } from "./style";
import api from "../../services/api";
import { useState } from "react";

const CardGoal = ({goal, getGroups}) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@habits:token")));
    const [showUpdateGoalForm, setShowUpdateGoalForm] = useState(false);
    const [select, setSelect] = useState("true");

    const handleRemoveGoal = (id) => {
        api.delete(`/goals/${id}/`,{
            headers: {
                Authorization: `Bearer ${token}`
        }})
        .then(response => getGroups())
        .catch(error => console.log(error));
    };

    const handleUpdateGoal = (data, id) => {
        const newData = {achieved: data}
        api.patch(`/goals/${id}/`, newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => getGroups())
        .catch(error => console.log(error))
    }

    return (
        <GoalDiv>
            <p><span>Title:</span> {goal.title}</p>
            <p><span>Difficulty:</span> {goal.difficulty}</p>
            <p><span>Achieved:</span> {goal.achieved ? "yes" : "no"}</p>
            <p><span>How much achieved</span> {goal.how_much_achieved}</p>
            <ButtonsDiv>
                <UpdateGoalDiv>
                    <UpdateGoalButton onClick={() => setShowUpdateGoalForm(!showUpdateGoalForm)}>
                        Update goal
                    </UpdateGoalButton>
                    {showUpdateGoalForm 
                    &&  <UpdateGoalSelectDiv>
                            <select onChange={e => setSelect(e.target.value)}>
                                <option value="true">True</option>
                                <option value="false">False</option>
                            </select>
                            <button onClick={() => handleUpdateGoal(select, goal.id)}>Update</button>
                        </UpdateGoalSelectDiv>
                    }
                </UpdateGoalDiv>
                <RemoveGoalButton onClick={() => handleRemoveGoal(goal.id)}>
                    Remove goal    
                </RemoveGoalButton>
            </ButtonsDiv>
        </GoalDiv>
    )
}

export default CardGoal