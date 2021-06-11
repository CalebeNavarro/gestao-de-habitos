import { Link, Redirect } from "react-router-dom"
import StyledHome from "./styled"
import logo from "../../assets/img_logo.png"
import { useContext } from "react"
import { AuthenticateContext } from "../../providers/Authenticate"


const Home = () => {
    
    const {isLoged} = useContext(AuthenticateContext)

    if(isLoged() === true){
      return <Redirect to="/dashboard"/>
    }

    return <StyledHome>
        <h1>Welcome to Life Management</h1>
        <figure>
          <img src={logo} alt='Person Floating' ></img>
        </figure>

         <div>
        <Link to="/signup" >Sign  Up</Link>
        <Link to="/login" >Log In</Link>
        </div>
    </StyledHome>
}

export default Home;