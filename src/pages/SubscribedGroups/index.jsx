import { Container, ContainerCards } from './styles';
import Header from '../../components/Header';
import CardGroup from '../../components/CardGroup'
// import { useSubGroups } from '../../providers/SubGroups';
import Footer from '../../components/Footer';
import Img from '../../assets/undraw_Selecting_team_re_ndkb.png'
import { Redirect } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import api from '../../services/api';
import { AuthenticateContext } from '../../providers/Authenticate';

const SubscribedGroups = () => {
    // const { groups, attGroups } = useSubGroups();
    const [ id, setId ] = useState(-1);
    const [ groups, setGroups ] = useState([]);

    const {authenticated} = useContext(AuthenticateContext)
    
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("@habits:token")) || ''
        api.get("/groups/subscriptions/", {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => setGroups(response.data))
          .catch(err => console.log(err))
    }, [])

      

    const handleCard = id => {
        setId(id) 
    }
    
    if(id !== -1) {
        return <Redirect
        to={{
            pathname: `/groups/${id}`,
            state: { referrer: "/subscribedgroups" },
            id: id
        }}
        /> 
    }

    if(!authenticated){
        return <Redirect to="/"/>
      }

    return (
        <Container>
            <Header page="subscribedgroups"/>

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
                fixDiv={true}
            >
                Os grupos sao importantes na inserção no convívio social e auxiliara voce a ver atividades e metas em comum.
            </Footer>

        </Container>
    )
}

export default SubscribedGroups;