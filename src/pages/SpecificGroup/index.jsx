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
import { useEffect, useState } from "react";

const SpecificGroup = () => {

    const [goalsDivOpened, setGoalsDivOpened] = useState(false);
    const [activitiesDivOpened, setActivitiesDivOpened] = useState(false);
    const [isOpened, setIsOpened] = useState(true);
    const [goalsModalOpened, setGoalsModalOpened] = useState(false);
    const [activitiesModalOpened, setActivitiesModalOpened] = useState(false);

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

    return (
        <>
            <Header />
            <SpecificGroupMain>
                <SpecificGroupDiv isOpened={isOpened}>
                    <SpecificGroupH3>nome do grupo</SpecificGroupH3>
                    <SpecificGroupP>category</SpecificGroupP>
                    <SpecificGroupP>description</SpecificGroupP>
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

                            </ActivitiesListDiv>
                            <SpaceDiv> </SpaceDiv>
                            <Button widthMobile="300" func={() => setActivitiesModalOpened(true)}> Create new Activities </Button>
                        </ActivitiesDiv>
                    </Container>
                </SpecificGroupDiv>
                <ModalDiv>
                    {goalsModalOpened 
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <form>goals</form>
                        </Modal>
                    }
                    {activitiesModalOpened 
                    &&  <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                            <form>activities</form>
                        </Modal>
                    }
                </ModalDiv>
            </SpecificGroupMain>
        </>
    )
}

export default SpecificGroup;