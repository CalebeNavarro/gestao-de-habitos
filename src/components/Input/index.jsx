import { Container, ContainerInput } from './styles';

const Input = ({ error = "", register, name, label, icon: Icon, width, ...rest }) => {
  return (
    <Container>
      <label>{label}</label>

      <ContainerInput width={width}>
        {Icon && <Icon size={25}/>}
        <input 
          {...register(name)}
          {...rest}
        />
      </ContainerInput>

      <span>{!!error && error}</span>
    </Container> 
  )
}
export default Input