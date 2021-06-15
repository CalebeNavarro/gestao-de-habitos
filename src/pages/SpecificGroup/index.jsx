import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { 
    SpecificGroupDiv, 
    SpecificGroupH3, 
    SpecificGroupP,
    Container,
    SpecificGroupMain,
    ModalDiv,
    SpecificGroupInfo,
    UnsubscribeButton,
    SubscribeButton
} from "./style"
import { useContext, useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import api from "../../services/api";
import CreateGoalForm from "../../components/CreateGoalForm";
import CreateActivityForm from "../../components/CreateActivityForm";
import { AuthenticateContext } from "../../providers/Authenticate";
import GoalsList from "../../components/GoalsList";
import ActivitiesList from "../../components/ActivitiesList";
import jwt_decode from "jwt-decode";

const SpecificGroup = () => {

    const {isLoged} = useContext(AuthenticateContext)

    const { id } = useParams();
    const [userId] = useState(() => {
        const token = JSON.parse(localStorage.getItem("@habits:token")) || null;
        const decoded = jwt_decode(token);
        return decoded.user_id
    });
    const [goalsDivOpened, setGoalsDivOpened] = useState(false);
    const [activitiesDivOpened, setActivitiesDivOpened] = useState(false);
    const [isOpened, setIsOpened] = useState(true);
    const [goalsModalOpened, setGoalsModalOpened] = useState(false);
    const [activitiesModalOpened, setActivitiesModalOpened] = useState(false);
    const [subscribed, setSubscribed] = useState(false);

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
        .catch(error => console.log(error))
    }

    useEffect(() => {
        getGroups();
    }, [id])

    useEffect(() => {
        if(groupInfo.users_on_group){
            groupInfo.users_on_group.map((member) => {
                if(member.id === userId){
                    return setSubscribed(true);
                }
            })}
    }, [groupInfo])

    const handleSubscribe = (aa) => {
        const token = JSON.parse(localStorage.getItem("@habits:token"));
        api.post(`/groups/${aa}/subscribe/`, {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => getGroups())
            .catch(error => console.log(error.response))
    }

    const handleUnsubscribe = (id) => {
        const token = JSON.parse(localStorage.getItem("@habits:token"));
        api.delete(`/groups/${id}/unsubscribe/`, {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }})
        .then(response => {
            setSubscribed(false);
            getGroups();
        })
        .catch(error => console.log(error))
    }

    const { goals, activities } = groupInfo;

    if (isLoged() === false){
        return <Redirect to="/"/>;
    }

    return (
        <>
            <Header />
            <SpecificGroupMain>
                <SpecificGroupDiv>
                    <SpecificGroupInfo>
                        <SpecificGroupH3>{groupInfo.name}</SpecificGroupH3>
                        <SpecificGroupP><span>Creator: </span>{groupInfo.creator?.username}</SpecificGroupP>
                        <SpecificGroupP><span>Category: </span>{groupInfo.category}</SpecificGroupP>
                        <SpecificGroupP><span>Description: </span>{groupInfo.description}</SpecificGroupP>
                        {subscribed 
                            ? <UnsubscribeButton onClick={() => handleUnsubscribe(id)}>unsubscribe</UnsubscribeButton>
                            : <SubscribeButton onClick={() => handleSubscribe(id)}>subscribe</SubscribeButton>
                        }
                    </SpecificGroupInfo>
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