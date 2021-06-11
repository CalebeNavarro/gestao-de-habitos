import { ActivitiesDiv, ActivitiesNameDiv, ActivitiesListDiv, SpaceDiv } from "./style";
import ActivitiesButton from "../ActivitiesButton";
import Button from "../Button";
import CardActivitie from "../CardActivitie";

const ActivitiesList = ({activitiesDivOpened, setActivitiesDivOpened, activities, setActivitiesModalOpened}) => {
    return (
        <ActivitiesDiv>
            <ActivitiesButton 
                onClick={() => setActivitiesDivOpened(!activitiesDivOpened)} 
                activitiesDivOpened={activitiesDivOpened}
            />
            <ActivitiesNameDiv>Activities</ActivitiesNameDiv>
            <ActivitiesListDiv activitiesDivOpened={activitiesDivOpened}>
                {activities && activities.map((activitie) => <CardActivitie activitie={activitie} key={activitie.id}/>)}
            </ActivitiesListDiv>
            <SpaceDiv> </SpaceDiv>
            <Button widthMobile="300" func={() => setActivitiesModalOpened(true)}> Create new Activities </Button>
        </ActivitiesDiv>
    )
}

export default ActivitiesList;