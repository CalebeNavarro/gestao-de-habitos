import {GoalsDiv, GoalsNameDiv, GoalsListDiv, SpaceDiv, ButtonsDivs } from "./style";
import GoalsButton from "../../components/GoalsButton";
import CardGoal from "../CardGoal";
import Button from "../Button";
import { useState } from "react";

const GoalsList = ({goalsDivOpened, setGoalsDivOpened, goals, setGoalsModalOpened, getGroups}) => {
    const [ whoButton, UseWhoButton ] = useState(false);

    return (
        <GoalsDiv>
            <GoalsButton
                onClick={() => setGoalsDivOpened(!goalsDivOpened)}
                goalsDivOpened={goalsDivOpened}
            /> 
            <GoalsNameDiv>
                Goals
            </GoalsNameDiv>

            <GoalsListDiv goalsDivOpened={goalsDivOpened}>
                <ButtonsDivs whoButton={whoButton}>
                    <button onClick={() => UseWhoButton(true)} >Done</button>
                    <button onClick={() => UseWhoButton(false)} >To Do</button>
                </ButtonsDivs>
                
                {whoButton && goals && goals.map((goal) =>
                    goal.achieved && <CardGoal goal={goal} key={goal.id} getGroups={getGroups}/>
                )}

                {!whoButton && goals && goals.map((goal) =>
                    !goal.achieved && <CardGoal goal={goal} key={goal.id} getGroups={getGroups}/>
                )}

            </GoalsListDiv>
            <SpaceDiv></SpaceDiv>
            <Button widthMobile="300" func={() => setGoalsModalOpened(true)}> 
                Create Goal 
            </Button>
        </GoalsDiv>
    )
}

export default GoalsList;