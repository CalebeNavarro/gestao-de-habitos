import { Container, Img, Text } from './styles';

const Footer = ({  type, img, children, button }) => {
  return (
    <>
    {type === "mobile" 
    ? (
      <Container
        mobile
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