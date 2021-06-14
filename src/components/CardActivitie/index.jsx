import { ActivitieDiv } from "./style";
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
    
    return (
        <ActivitieDiv>
            <p><span>Title:</span> {activitie.title}</p>
            <p><span>Realization time:</span>{activitie.realization_time}</p>
            <button onClick={() => setShowTitleInput(!showTitleInput)}> Update title </button>
            {showTitleInput 
                &&  <>
                        <input 
                            type="text" 
                            onChange={e => setInputValue(e.target.value)}
                            value={inputValue}
                        />
                        <button onClick={() => handleUpdateTitle(inputValue, activitie.id)}> Update </button>
                    </>
            }
        </ActivitieDiv>
    )
}

export default CardActivitie;