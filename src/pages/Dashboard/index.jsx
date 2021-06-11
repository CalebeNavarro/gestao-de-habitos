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
import {useContext} from "react"
import { Redirect } from "react-router";
import { AuthenticateContext } from "../../providers/Authenticate";

const Dashboard = () => {

  const {authenticated} = useContext(AuthenticateContext)

  if(!authenticated){
    return <Redirect to="/"/>
  }

  return (
    <>
      <Header />
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
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
          <CardHabit></CardHabit>
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
