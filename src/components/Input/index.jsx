import { Container, ContainerInput } from './styles';

export default function Input({ error = "", register, name, label, icon : Icon , ...rest }) {
  
  return (
    <Container>
      <label>{label}</label>

      <ContainerInput>
        <Icon />
        <input 
          {...register(name)}
          {...rest}
        />
      </ContainerInput>

      <span>{!!error && error}</span>
    </Container> 
  )
}
