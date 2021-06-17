import { 
    ActivitieDiv, 
    UpdateTitleButton, 
    TitleInput, 
    UpdateTitleDiv, 
    UpdateButton, 
    RemoveActivityButton, 
    ButtonsDiv,
    UpdateActivityTitleDiv
} from "./style";
import { useState } from "react";
import api from "../../services/api";

const CardActivitie = ({activitie, getGroups}) => {

    const [token] = useState(JSON.parse(localStorage.getItem("@habits:token")));

    const [showTitleInput, setShowTitleInput] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleUpdateTitle = (data, id) => {
        const newData = {title: data}
        api.patch(`/activities/${id}/`, newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => getGroups())
        .catch(error => console.log(error))
    }

    const handleRemoveActivity = (id) => {
        api.delete(`/activities/${id}/`, {
            headers: {
                Authorization: `Bearer ${token}`
        }})
        .then(response => getGroups())
        .catch(error => console.log(error))
    }
    
    return (
        <ActivitieDiv>
            <p><span>Title:</span> {activitie.title}</p>
            <p><span>Realization time:</span>{activitie.realization_time}</p>
            <ButtonsDiv>
                <UpdateTitleDiv>
                    <UpdateTitleButton onClick={() => setShowTitleInput(!showTitleInput)}> Update title </UpdateTitleButton>
                    {showTitleInput 
                        &&  <UpdateActivityTitleDiv>
                                <TitleInput 
                                    type="text" 
                                    onChange={e => setInputValue(e.target.value)}
                                    value={inputValue}
                                />
                                <UpdateButton onClick={() => handleUpdateTitle(inputValue, activitie.id)}> Update </UpdateButton>
                            </UpdateActivityTitleDiv>
                    }
                </UpdateTitleDiv>
                <RemoveActivityButton onClick={() => handleRemoveActivity(activitie.id)}>
                    Remove goal    
                </RemoveActivityButton>
            </ButtonsDiv>
        </ActivitieDiv>
    )
}

export default CardActivitie;