import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { 
    SpecificGroupDiv, 
    SpecificGroupH3, 
    SpecificGroupP,
    Container,
    SpecificGroupMain,
    ModalDiv
} from "./style"
import { useContext, useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import api from "../../services/api";
import CreateGoalForm from "../../components/CreateGoalForm";
import CreateActivityForm from "../../components/CreateActivityForm";
import { AuthenticateContext } from "../../providers/Authenticate";
import GoalsList from "../../components/GoalsList";
import ActivitiesList from "../../components/ActivitiesList";

const SpecificGroup = () => {

    const {isLoged} = useContext(AuthenticateContext)

    const { id } = useParams()
    const [goalsDivOpened, setGoalsDivOpened] = useState(false);
    const [activitiesDivOpened, setActivitiesDivOpened] = useState(false);
    const [isOpened, setIsOpened] = useState(true);
    const [goalsModalOpened, setGoalsModalOpened] = useState(false);
    const [activitiesModalOpened, setActivitiesModalOpened] = useState(false);

    const [groupInfo, setGroupInfo] = useState([]);

    useEffect(() => {
        if (goalsModalOpened === true){
            setIsOpened(true);
        } else if (activitiesModalOpened === true) {
            setIsOpened(true);
        };
        if(isOpened === false){
            setGoalsModalOpened(false);
            setActivitiesModalOpened(false);
        }

    }, [goalsModalOpened,activitiesModalOpened,isOpened]);

    const getGroups = () => {
        api.get(`/groups/${id}/`)
        .then((group) => setGroupInfo(group.data))
    }

    useEffect(() => {
        getGroups();
    }, [id])

    const { goals, activities } = groupInfo;

    if (isLoged() === false){
        return <Redirect to="/"/>;
    }

    return (
        <>
            <Header />
            <SpecificGroupMain>
                <SpecificGroupDiv isOpened={isOpened}>
                    <SpecificGroupH3>{groupInfo.name}</SpecificGroupH3>
                    <SpecificGroupP>{groupInfo.category}</SpecificGroupP>
                    <SpecificGroupP>{groupInfo.description}</SpecificGroupP>
                    <Container>
                        <GoalsList 
                            goalsDivOpened={goalsDivOpened}
                            setGoalsDivOpened={setGoalsDivOpened}
                            goals={goals}
                            setGoalsModalOpened={setGoalsModalOpened}
                            getGroups={getGroups}
                        />
                        <ActivitiesList 
                            activitiesDivOpened={activitiesDivOpened}
                            setActivitiesDivOpened={setActivitiesDivOpened}
                            activities={activities}
                            setActivitiesModalOpened={setActivitiesModalOpened}
                            getGroups={getGroups}
                        />
                    </Container>
                </SpecificGroupDiv>
                <ModalDiv>
                    {goalsModalOpened 
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <h3>Create new Goal</h3>
                            <CreateGoalForm id={id} getGroups={getGroups} />
                        </Modal>
                    }
                    {activitiesModalOpened 
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <h3>Create new Activitie</h3>
                            <CreateActivityForm id={id} getGroups={getGroups} />
                        </Modal>
                    }
                </ModalDiv>
            </SpecificGroupMain>
        </>
    )
}

export default SpecificGroup;