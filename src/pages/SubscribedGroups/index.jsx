import { Container, ContainerCards } from './styles';
import Header from '../../components/Header';
import CardGroup from '../../components/CardGroup'
import { useSubGroups } from '../../providers/SubGroups';
import Footer from '../../components/Footer';
import Img from '../../assets/undraw_Selecting_team_re_ndkb.png'
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

const SubscribedGroups = () => {
    const { groups } = useSubGroups();
    const [ id, setId ] = useState(-1);

    const handleCard = id => {
        setId(id) 
    }

    if(id !== -1) {
        return <Redirect
        to={{
          pathname: "/login",
        //   search: "?utm=your+face",
          state: { referrer: "/subscribedgroups" },
          id: id
        }}
      /> 
    }

    return (
        <Container>
            <Header />


            <h2>Subscribed Groups</h2>

            <Footer 
                type='mobile'
            >
                Os grupos sao importantes na inserção no convívio social e auxiliara voce a ver atividades e metas em comum.
            </ Footer>

            <ContainerCards>
                {groups.map(group =>
                    <CardGroup key={group.id}
                        group={group}
                        onClick={() => handleCard(group.id)}
                    />    
                )}
            </ContainerCards>

            <Footer 
                img={Img}
            >
                Os grupos sao importantes na inserção no convívio social e auxiliara voce a ver atividades e metas em comum.
            </Footer>

        </Container>
    )
}

export default SubscribedGroups;