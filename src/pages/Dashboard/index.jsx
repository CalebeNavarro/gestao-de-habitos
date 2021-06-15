import {
  Container,
  HabitCards,
  Welcome,
  DesktopNone,
  // Top,
  Form,
} from "../Dashboard/styles";  
import CardHabit from "../../components/CardHabit";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/undraw_To_do_re_jaef.png";
import { Redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
// import Top from "../../components/Top";
import { AuthenticateContext } from "../../providers/Authenticate";

import Modal from "../../components/Modal"
import Input from "../../components/Input"
import CreateHabitForm from "../../components/CreateHabitForm";

const Dashboard = () => {
  const [habits, setHabits] = useState([]);
  const { isLoged } = useContext(AuthenticateContext);
  const userName = JSON.parse(localStorage.getItem("@infoUser")) || '';

  const [goalsDivOpened, setGoalsDivOpened] = useState(false);
  const [habitDivOpened, setHabitDivOpened] = useState(false);
  const [isOpened, setIsOpened] = useState(true);
  const [goalsModalOpened, setGoalsModalOpened] = useState(false);
  const [habitModalOpened, setHabitModalOpened] = useState(false);


  const [groupInfo, setGroupInfo] = useState([]);

    useEffect(() => {
        if (goalsModalOpened === true){
            setIsOpened(true);
        } else if (habitModalOpened === true) {
            setIsOpened(true);
        };
        if(isOpened === false){
            setGoalsModalOpened(false);
            setHabitModalOpened(false);
        }

    }, [goalsModalOpened,habitModalOpened,isOpened]);

    // useEffect(() => {
    //     api.get(`/groups/${id}/`)
    //     .then((group) => setGroupInfo(group.data))
    // }, [id])

    const { habit } = groupInfo;
//===

  useEffect(() => {
    teste()
  }, [])
  
  const teste = () => {
    const token = JSON.parse(localStorage.getItem("@habits:token"))
    api.get("/habits/personal/", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
     .then(response =>{ 
       console.log(response.data)
       setHabits(response.data)
      })
     .catch(err => console.log(err))
  }

  // const teste = () => {
  //   const token = JSON.parse(localStorage.getItem("@habits:token"));
  //   api
  //     .get("/habits/personal/", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => setHabits(response.data))
  //     .catch((err) => console.log(err));
  // };

  if (isLoged() === false) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />

      <Container >


        <Welcome>
          <h1>Welcome, {userName}</h1>

          <DesktopNone>
            <p>
              Sua saúde é importante, siga seus habitos frequentemente, seja
              paciente e tente criar habitos semanais, então crie seu hábito
              somente para você.
            </p>

            <Button func={() => setHabitModalOpened(true)}>Create habit</Button>
            {/* <Top /> */}
          </DesktopNone>
        </Welcome>

        <HabitCards>
          {habits.map((habit) => (
            <CardHabit key={habit.id} habit={habit} />
          ))}
        </HabitCards>

        {habitModalOpened && (
          <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
            <h3>Create new habit</h3>
          </Modal>
        )}

        <Footer
          fixDiv
          button={
            <Button func={() => setHabitModalOpened(true)}>Create Habit</Button>
          }
          img={image}
        >
          Sua saúde é importante, siga seus habitos frequentemente, seja
          paciente e tente criar habitos semanais, então crie seu hábito
          somente para você.
        </Footer>
      </Container>
    </>
  );
};

export default Dashboard;
