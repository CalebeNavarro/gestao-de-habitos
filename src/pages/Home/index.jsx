import { Link } from "react-router-dom"
import StyledHome from "./styled"
import logo from "../../assets/img_logo.png"

const Home = () => {
    return <StyledHome>
        <h1>Welcome to Life Management</h1>
       
        <img src={logo} ></img>
       
         <div>
        <Link to="/signup" >Sign  Up</Link>
        <Link to="/login" >Log In</Link>
        </div>
    </StyledHome>
}

export default Home;