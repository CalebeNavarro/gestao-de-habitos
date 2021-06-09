import { Container } from './styles';

const Button = ({func ,widthMobile = '110', widthDesktop = '310', ...rest}) => {
  return (
    <Container
      widthMobile={widthMobile}
      widthDesktop={widthDesktop}
      {...rest}
      onClick={func}
    />
  )
}

export default Button;