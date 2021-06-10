import { Link, Redirect } from "react-router-dom"
import StyledHome from "./styled"
import logo from "../../assets/img_logo.png"
import {AuthenticateContext, AuthenticateProvider} from "../../providers/authentication"
import {useContext} from "react"


const Home = () => {
    const {authenticated} = useContext(AuthenticateContext)
    


  if(authenticated){
    return <Redirect to="/dashboard"/>
  }

    return <StyledHome>
        <h1>Welcome to Life Management</h1>
       
        <img src={logo} alt='Person Floating' ></img>

         <div>
        <Link to="/signup" >Sign  Up</Link>
        <Link to="/login" >Log In</Link>
        </div>
    </StyledHome>
}

export default Home;