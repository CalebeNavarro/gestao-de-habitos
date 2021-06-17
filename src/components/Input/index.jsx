import { Container, ContainerInput } from './styles';

const Input = ({ error = "", register, name, label, id, icon: Icon, width, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>{label}</label>

      <ContainerInput width={width}>
        {Icon && <Icon size={25}/>}
        <input id={id}
          {...register(name)}
          {...rest}
        />
      </ContainerInput>

      <span>{!!error && error}</span>
    </Container> 
  )
}
export default Input