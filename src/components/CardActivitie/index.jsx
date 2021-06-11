import { ActivitieDiv } from "./style";

const CardActivitie = ({activitie}) => {
    return (
        <ActivitieDiv>
            <p><span>Title:</span> {activitie.title}</p>
            <p><span>Realization time:</span>{activitie.realization_time}</p>
        </ActivitieDiv>
    )
}

export default CardActivitie;