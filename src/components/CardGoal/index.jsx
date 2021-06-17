import { GoalDiv, ButtonsDiv,RemoveGoalButton, UpdateGoalDiv} from "./style";
import api from "../../services/api";
import { useState } from "react";
import { toast } from "react-toastify";

const CardGoal = ({goal, getGroups}) => {
    const [ value, setValue ] = useState(goal.how_much_achieved)
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

    const handleUpdateGoal = () => {
        let data = {};
        if (value === "100") {
            data = {how_much_achieved: value, achieved: true}
        }  else {
            data = {how_much_achieved: value}
        }

        api.patch(`/goals/${goal.id}/`, data , {
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
        <GoalDiv display={goal.achieved}>
            <p><span>Title:</span> {goal.title}</p>
            <p><span>Difficulty:</span> {goal.difficulty}</p>
            <p><span>Achieved:</span> {goal.achieved ? "yes" : "no"}</p>
            <UpdateGoalDiv display={goal.achieved}>
                <input type='range' value={value} onChange={(evt) => setValue(evt.currentTarget.value)}/> 
                <button onClick={handleUpdateGoal}>Enviar</button>
            </UpdateGoalDiv>

            <ButtonsDiv>
                <RemoveGoalButton onClick={() => handleRemoveGoal(goal.id)}>
                    Remove goal    
                </RemoveGoalButton>
            </ButtonsDiv>
        </GoalDiv>
    )
}

export default CardGoal