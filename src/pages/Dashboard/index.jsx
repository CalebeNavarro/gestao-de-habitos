import {
  Container,
  HabitCards,
  Welcome,
  DesktopNone,
} from "../Dashboard/styles";
import CardHabit from "../../components/CardHabit";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/undraw_To_do_re_jaef.png";
import { Redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import Top from "../../components/Top";
import { AuthenticateContext } from "../../providers/Authenticate";

import Modal from "../../components/Modal";
import CreateHabitForm from "../../components/CreateHabitForm";

const Dashboard = () => {
  const [ whoButton, UseWhoButton ] = useState(false);
  const [habits, setHabits] = useState([]);
  const { isLoged } = useContext(AuthenticateContext);
  const userName = JSON.parse(localStorage.getItem("@infoUser")) || "";
  const [isOpened, setIsOpened] = useState(true);
  const [goalsModalOpened, setGoalsModalOpened] = useState(false);
  const [habitModalOpened, setHabitModalOpened] = useState(false);

  useEffect(() => {
    if (goalsModalOpened === true) {
      setIsOpened(true);
    } else if (habitModalOpened === true) {
      setIsOpened(true);
    }
    if (isOpened === false) {
      setGoalsModalOpened(false);
      setHabitModalOpened(false);
    }
  }, [goalsModalOpened, habitModalOpened, isOpened]);

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = () => {
    const token = JSON.parse(localStorage.getItem("@habits:token"));
    api
      .get("/habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  };

  if (isLoged() === false) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header />

      <Container>
        <Welcome>
          <h1>Welcome, {userName}</h1>

          <DesktopNone>
            <Button func={() => setHabitModalOpened(true)}>Create habit</Button>
            <Top />
          </DesktopNone>
        </Welcome>

        <Button func={() => UseWhoButton(!whoButton)}>{whoButton ? "To Do" : "Done"}</Button>

        <HabitCards>

          {!whoButton && habits.map(habit =>
              !habit.achieved && (
                <CardHabit key={habit.id} habit={habit} func={loadHabits} />
              )
          )}

          {whoButton && habits.map(habit =>
              habit.achieved && (
                <CardHabit key={habit.id} habit={habit} func={loadHabits} dp/>
              )
          )}
        </HabitCards>

        {habitModalOpened && (
          <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
            <h3>Create new habit</h3>
            <CreateHabitForm func={loadHabits} />
          </Modal>
        )}

        <Footer
          button={
            <Button func={() => setHabitModalOpened(true)}>Create Habit</Button>
          }
          img={image}
        >
          Os bons hábitos são aqueles que levam as pessoas a se tornarem mais
          produtivas, pois pessoas que aplicam hábitos produtivos utilizam
          melhor os recursos e aumentam a capacidade de gerar resultados. Crie
          um hábito para seguir agora mesmo!
        </Footer>
      </Container>
    </>
  );
};

export default Dashboard;
