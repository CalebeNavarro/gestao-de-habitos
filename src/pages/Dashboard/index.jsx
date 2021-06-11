import {
  Container,
  HabitCards,
  Welcome,
  DesktopNone,
  Top,
} from "../Dashboard/styles";
import CardHabit from "../../components/CardHabit";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image from "../../assets/undraw_To_do_re_jaef.png";
import { AiOutlineToTop } from "react-icons/ai";
import { Redirect } from "react-router";
import { useContext, useEffect, useState } from "react";
import api from '../../services/api';
import { AuthenticateContext } from "../../providers/Authenticate";

const Dashboard = () => {
  const [ habits, setHabits ] = useState([]);
  const {authenticated} = useContext(AuthenticateContext)
  
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
     .then(response => setHabits(response.data))
     .catch(err => console.log(err))
  }
  
  if(!authenticated){
    return <Redirect to="/"/>
  }

  return (
    <>
      <Header/>
      <Container>
        <Welcome>
          <h1>Welcome, username</h1>
          <DesktopNone>
            <p>
              Sua saúdo é importa, siga seus habitos frequen temente, seja
              paciente e tente criar habitos semanais, então crie seu hábito
              somente para você.
            </p>
            <Button>Create habit</Button>
            <Top>
              <a href="#top">
                <AiOutlineToTop />
              </a>
            </Top>
          </DesktopNone>
        </Welcome>

        <HabitCards>
          {habits.map(habit =>
            <CardHabit key={habit.id} 
              habit={habit}
            />
          )}
        </HabitCards>

        <Footer button={<Button>Create Habit</Button>} img={image}>
          Sua saúdo é importa, siga seus habitos frequen temente, seja paciente
          e tente criar habitos semanais, então crie seu hábito somente para
          você.
        </Footer>
      </Container>
    </>
  );
};

export default Dashboard;
