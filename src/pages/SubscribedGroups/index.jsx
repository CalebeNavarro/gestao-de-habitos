import { Container, ContainerCards, Text, Image } from "./styles";
import Header from "../../components/Header";
import CardGroup from "../../components/CardGroup";
import Img from "../../assets/undraw_Selecting_team_re_ndkb.png";
import { Redirect, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { AuthenticateContext } from "../../providers/Authenticate";
import Top from "../../components/Top";

const SubscribedGroups = () => {
  const [id, setId] = useState(-1);
  const [groups, setGroups] = useState([]);
  const { isLoged } = useContext(AuthenticateContext);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@habits:token")) || "";
    api
      .get("/groups/subscriptions/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setGroups(response.data))
      .catch((err) => console.log(err));
  }, []);

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
      <Header page="subscribedgroups" />
      <h2>Subscribed Groups</h2>
      <Text>
      Here are the groups you are subscribed to so you can easily track your groups, activities and goals. If you are not subscribed to any group, 
        <Link to="/groups"> look for one to register.</Link>
      </Text>
      <Top />
      {groups.length > 0 ? null : <Image src={Img} alt="pic" />}

      <ContainerCards>
        <div className="container-cards">
          {groups.map((group) => (
            <CardGroup
              key={group.id}
              group={group}
              onClick={() => handleCard(group.id)}
            />
          ))}
        </div>
      </ContainerCards>
    </Container>
  );
};

export default SubscribedGroups;
