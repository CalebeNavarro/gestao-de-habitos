import Header from "../../components/Header";
import Modal from "../../components/Modal";
import { 
    SpecificGroupDiv, 
    SpecificGroupH3, 
    SpecificGroupP,
    GoalsDiv,
    GoalsButton, 
    TriangleClosedDiv,
    TriangleOpenedDiv, 
    GoalsListDiv, 
    ActivitiesDiv,
    ActivitiesButton,
    ActivitiesListDiv,
    SpaceDiv,
    Container,
    GoalsNameDiv,
    ActivitiesNameDiv,
    SpecificGroupMain,
    ModalDiv
} from "./style"
import { IoMdPlay } from "react-icons/io";
import Button from "../../components/Button"
import { useContext, useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import api from "../../services/api";
import CardGoal from "../../components/CardGoal";
import CardActivitie from "../../components/CardActivitie";
import CreateGoalForm from "../../components/CreateGoalForm";
import CreateActivityForm from "../../components/CreateActivityForm";
<<<<<<< HEAD
=======
import { AuthenticateContext } from "../../providers/Authenticate";
>>>>>>> 43583a42e5eaa1acd9af5760607e3cd4d2ee9f60

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

    useEffect(() => {
        api.get(`/groups/${id}/`)
        .then((group) => setGroupInfo(group.data))
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
                        <GoalsDiv>
                            <GoalsButton onClick={() => setGoalsDivOpened(!goalsDivOpened)}> 
                                {goalsDivOpened 
                                ?   <TriangleOpenedDiv>
                                        <IoMdPlay />
                                    </TriangleOpenedDiv>
                                :   <TriangleClosedDiv>
                                        <IoMdPlay />
                                    </TriangleClosedDiv>    
                                }
                                Goals 
                            </GoalsButton>
                            <GoalsNameDiv>Goals</GoalsNameDiv>
                            <GoalsListDiv goalsDivOpened={goalsDivOpened}>
                                {goals && goals.map((goal) => <CardGoal goal={goal} key={goal.id}/>)}
                            </GoalsListDiv>
                            <SpaceDiv></SpaceDiv>
                            <Button widthMobile="300" func={() => setGoalsModalOpened(true)}> 
                                Create new Goal 
                            </Button>
                        </GoalsDiv>
                        <ActivitiesDiv>
                            <ActivitiesButton onClick={() => setActivitiesDivOpened(!activitiesDivOpened)}>
                                {activitiesDivOpened
                                ?   <TriangleOpenedDiv>
                                        <IoMdPlay />
                                    </TriangleOpenedDiv>
                                :   <TriangleClosedDiv>
                                        <IoMdPlay />
                                    </TriangleClosedDiv> 
                                }
                                Activities
                            </ActivitiesButton>
                            <ActivitiesNameDiv>Activities</ActivitiesNameDiv>
                            <ActivitiesListDiv activitiesDivOpened={activitiesDivOpened}>
                                {activities && activities.map((activitie) => <CardActivitie activitie={activitie} key={activitie.id}/>)}
                            </ActivitiesListDiv>
                            <SpaceDiv> </SpaceDiv>
                            <Button widthMobile="300" func={() => setActivitiesModalOpened(true)}> Create new Activities </Button>
                        </ActivitiesDiv>
                    </Container>
                </SpecificGroupDiv>
                <ModalDiv>
                    {goalsModalOpened 
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <h3>Create new Goal</h3>
                            <CreateGoalForm id={id}/>
                        </Modal>
                    }
                    {activitiesModalOpened 
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <h3>Create new Activitie</h3>
                            <CreateActivityForm id={id} />
                        </Modal>
                    }
                </ModalDiv>
            </SpecificGroupMain>
        </>
    )
}

export default SpecificGroup;