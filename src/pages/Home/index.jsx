import { Link } from "react-router-dom"
import StyledHome from "./styled"

const Home = () => {
    return <StyledHome>
        <h1>Welcome to Life Management</h1>
       
        <img src="https://veja.abril.com.br/wp-content/uploads/2019/12/amazonia-floresta-coraccca7ao.jpg.jpg" ></img>
       
         <div>
        <Link to="/signup" >Sign  Up</Link>
        <Link to="/login" >Log In</Link>
        </div>
    </StyledHome>
}

export default Home;