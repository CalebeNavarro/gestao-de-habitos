import { Container, Img, Text } from './styles';

const Footer = ({ fixDiv=false, type, img, children, button }) => {
  return (
    <>
    {type === "mobile" 
    ? (
      <Container
        display="true"
      >
        <Text>
          <p>
            {children}
          </p>
          {button}
        </Text>
    </Container>
    ) : (
      <Container
        display="false"
        fixDiv={fixDiv}
      >
      <Img 
        img={img}
      />

      <Text>
        <p>
          {children}
        </p>
        {button}
      </Text>
    </Container>
    )}
    </>
  )
}

export default Footer;