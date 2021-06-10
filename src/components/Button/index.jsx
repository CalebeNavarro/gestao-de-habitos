import { Container } from './styles';

const Button = ({ isHave=false, func ,widthMobile = '277', widthDesktop = '310', ...rest}) => {
  return (
    <Container
      isHave={isHave}
      widthMobile={widthMobile}
      widthDesktop={widthDesktop}
      {...rest}
      onClick={func}
    />

  )
}

export default Button;