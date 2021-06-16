import { useEffect, useState } from "react";
import { Container } from "./styles";

const CardGroup = ({ group, ...rest }) => {
  const category = group.category.toLowerCase()

  const [background,setBackground] = useState("")
  const [gradiente, setGradiente] = useState({
    color1: "#74ebd5",
    color2: "#ACB6E5"
  })
  const addBackgroundImg = () => {
    if(category.includes("health") || category.includes("saúde")){
      setBackground("https://ssir.org/images/articles/FullPage_Color-592.jpg")
    }
    if(category.includes("academia") || category.includes("workout")){
      setBackground("https://infonet.com.br/wp-content/uploads/2021/04/academia_fotofreepik_060421.jpg")
    }
    if(category.includes("book") || category.includes("leitura")){
      setBackground("https://edsurge.imgix.net/uploads/post/image/13231/reading-1585538079.jpg?auto=compress%2Cformat&w=1024&h=512&fit=crop")
    }

    if(background === ""){
      setBackground("https://i.pinimg.com/originals/d7/c3/41/d7c3412d99205b3a27faf60a713c3aa6.jpg")
    }
   
  }
 useEffect(()=>{
   addBackgroundImg()
 }, [background])
  
  return (
    <Container background={background} {...rest}>
      <p>Name: {group.name}</p>

      <p>Category: {group.category}</p>      

      <p>Description: {group.description}</p>
    </Container>
  )
};

export default CardGroup;