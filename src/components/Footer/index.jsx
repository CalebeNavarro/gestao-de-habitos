import { Container, Img, Text } from './styles';

const Footer = ({type, img, children, button }) => {
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