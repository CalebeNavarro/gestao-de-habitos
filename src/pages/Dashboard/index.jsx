import {
  Container,
  HabitCards,
  Welcome,
  SecondFooter,
  ButtonFooter
} from "../Dashboard/styles";
import CardHabit from "../../components/CardHabit";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/undraw_To_do_re_jaef.png";
import { Redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
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
          Welcome, {userName}!
        </Welcome>

        {habits.length > 0 && <Footer
          type='mobile'
          button={<ButtonFooter onClick={() => setHabitModalOpened(true)}>Create new Habit</ButtonFooter>}
          >
            Good habits are those that bring people to become more productive. Make a habit to follow right now!
        </Footer>}
        

        {habits.length > 0 ? (<>
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

          <Footer
            button={
              <Button func={() => setHabitModalOpened(true)}>Create Habit</Button>
            }
            img={image}
          >
            Good habits are those that bring people to become more productive, people that use habits products,
            use resources and increase their ability to generate results. Make a habit to follow right now!
          </Footer>
          </>
        ):(<>
          <blockquote cite="https://www.briantracy.com/">Make your life a masterpiece; imagine no limitations on what you can be, have or do.</blockquote>

          <Button func={() => setHabitModalOpened(true)}>Create your habit now!</Button>

          <SecondFooter>

          </SecondFooter>
          </>
        )}

        {habitModalOpened && (
          <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
            <h3>Create new habit</h3>
            <CreateHabitForm func={loadHabits} />
          </Modal>
        )}

      </Container>
    </>
  );
};

export default Dashboard;
