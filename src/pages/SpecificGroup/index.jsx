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
    SubscribeButton,
    EditGroupButton,
    MembersButton
} from "./style"
import { useContext, useEffect, useState } from "react";
import { useParams, Redirect, useHistory } from "react-router-dom";
import api from "../../services/api";
import CreateGoalForm from "../../components/CreateGoalForm";
import CreateActivityForm from "../../components/CreateActivityForm";
import EditGroupForm from "../../components/EditGroupForm";
import { AuthenticateContext } from "../../providers/Authenticate";
import GoalsList from "../../components/GoalsList";
import ActivitiesList from "../../components/ActivitiesList";
import jwt_decode from "jwt-decode";
import { toast } from "react-toastify";
import MembersList from "../../components/MembersList";

const SpecificGroup = () => {
    const history = useHistory();
    const { isLoged } = useContext(AuthenticateContext);
    const { id } = useParams();

    const [userId] = useState(() => {
        const token = JSON.parse(localStorage.getItem("@habits:token")) || null;
        const decoded = jwt_decode(token);
        return decoded.user_id;
    });

    const [goalsDivOpened, setGoalsDivOpened] = useState(false);
    const [activitiesDivOpened, setActivitiesDivOpened] = useState(false);
    const [isOpened, setIsOpened] = useState(true);
    const [goalsModalOpened, setGoalsModalOpened] = useState(false);
    const [activitiesModalOpened, setActivitiesModalOpened] = useState(false);
    const [subscribed, setSubscribed] = useState(false);
    const [unsubscribed, setUnsubscribed] = useState(false);
    const [creator, setCreator] = useState(false);
    const [editModalOpened, setEditModalOpened] = useState(false);
    const [membersModalOpened, setMembersModalOpened] = useState(false);
    const [groupInfo, setGroupInfo] = useState([]);

    useEffect(() => {
        if (goalsModalOpened === true){
            setIsOpened(true);
        } else if (activitiesModalOpened === true){
            setIsOpened(true);
        } else if (editModalOpened === true){
            setIsOpened(true);
        } else if (membersModalOpened === true){
            setIsOpened(true);
        };
        if(isOpened === false){
            setGoalsModalOpened(false);
            setActivitiesModalOpened(false);
            setEditModalOpened(false);
            setMembersModalOpened(false);
        };
    }, [isOpened, goalsModalOpened, activitiesModalOpened, editModalOpened, membersModalOpened]);

    const getGroups = () => {
        api
        .get(`/groups/${id}/`)
        .then((group) => setGroupInfo(group.data))
        .catch((error) => console.log(error));
    };

    useEffect(() => {
        getGroups();
    }, [id]);

    useEffect(() => {
        if(groupInfo.creator){
            if(groupInfo.creator.id === userId){
                return setCreator(true);
            } else if (groupInfo.users_on_group){
                const memberType = groupInfo.users_on_group.find((member) => {
                    return member.id === userId
                });
                if(memberType === undefined){
                    setSubscribed(false);
                    setUnsubscribed(true);
                } else {
                    setUnsubscribed(false);
                    setSubscribed(true);
                }
            };
        }; 
    }, [groupInfo, userId]);

    const handleSubscribe = () => {
        const token = JSON.parse(localStorage.getItem("@habits:token"));
        api.post(`/groups/${id}/subscribe/`,{}, {
            headers: {
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            toast.info("Successful to enter!")
            getGroups();
            return response;
        })
        .catch(error => console.log(error))
    };

    const handleUnsubscribe = () => {
        const token = JSON.parse(localStorage.getItem("@habits:token"));
        api
        .delete(`/groups/${id}/unsubscribe/`, {
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            toast.info(`Exit successful!`);
            setSubscribed(false);
            getGroups();
            history.push(history.location.state.referrer);
            return response;
        })
        .catch((error) => console.log(error.response));
    };

    const { goals, activities } = groupInfo;

    if (isLoged() === false) {
        return <Redirect to="/" />;
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
                        <MembersButton onClick={() => setMembersModalOpened(true)}>Members</MembersButton>
                        {subscribed && <UnsubscribeButton onClick={handleUnsubscribe}>Unsubscribe</UnsubscribeButton>}
                        {unsubscribed && <SubscribeButton onClick={handleSubscribe}>Subscribe</SubscribeButton>}
                        {creator && <EditGroupButton onClick={() => setEditModalOpened(true)}>Edit group</EditGroupButton>}
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
                    {editModalOpened
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <EditGroupForm 
                                id={id}
                                getGroups={getGroups}
                            />
                        </Modal>
                    }
                    {membersModalOpened
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <MembersList members={groupInfo.users_on_group}/>
                        </Modal>
                    }
                </ModalDiv>
            </SpecificGroupMain>
        </>
    )
}

export default SpecificGroup;