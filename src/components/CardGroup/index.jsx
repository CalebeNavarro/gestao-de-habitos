import { Container } from "./styles";

const CardGroup = ({ group, ...rest }) => {
  return (
    <Container {...rest}>
      <p>Name: {group.name}</p>

      <p>Category: {group.category}</p>      

      <p>Description: {group.description}</p>
    </Container>
  )
};

export default CardGroup;