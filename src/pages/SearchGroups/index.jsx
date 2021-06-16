import { Container, ContainerCards, Buttons } from "./styles";
import Header from "../../components/Header";
import FormSearchCategory from "../../components/FormSearchCategory";
import { useGroups } from "../../providers/Groups";
import CardGroup from "../../components/CardGroup";
import Img from "../../assets/undraw_Account_re_o7id.png";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AuthenticateContext } from "../../providers/Authenticate";
import Top from "../../components/Top";

const SearchGroups = () => {
  const { isLoged } = useContext(AuthenticateContext);
  const { groups, handleNext, handlePrev } = useGroups();
  const [id, setId] = useState(-1);

  const handleCard = (id) => {
    setId(id);
  };

  if (id !== -1) {
    return (
      <Redirect
        to={{
          pathname: `/groups/${id}`,
          state: { referrer: "/subscribedgroups" },
          id: id,
        }}
      />
    );
  }

  if (isLoged() === false) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header page="searchgroups" />

      <h2>Search Groups</h2>

      <FormSearchCategory />

      <Buttons>
        <Button func={handlePrev} isHave={!groups.previous && true}>
          Prev
        </Button>

        <Button func={handleNext} isHave={!groups.next && true}>
          Next
        </Button>
      </Buttons>

      <Top></Top>

      <ContainerCards>
        {groups.results.map((group) => (
          <CardGroup
            key={group.id}
            group={group}
            onClick={() => handleCard(group.id)}
          />
        ))}
      </ContainerCards>

      <Footer img={Img} fixDiv>
        O grupo é importante na inserção no convívio social, auxiliando na
        superação de problemas desta ordem. Aqui está a lista de grupos que você
        pode se inscrever para criar novas metas e atividades.
      </Footer>
    </Container>
  );
};

export default SearchGroups;
