import Input from "../../components/Input";
import {FormContainer, LogInContainer} from "./styles";
import LogInImage from "../../assets/undrawSingUp 1.png";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { UserContext } from "../../providers/user/index";
import { useHistory, Link, Redirect } from "react-router-dom";
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai";
import Button from "../../components/Button";
import {toast} from 'react-toastify';
import { AuthenticateContext } from "../../providers/Authenticate";



const LogIn = () => {
    const { getUser } = useContext(UserContext)
    const {isLoged} = useContext(AuthenticateContext)
    const history = useHistory()

    const schema = yup.object().shape({
        username: yup.string().required('Required field!'),
        password: yup.string().required('Required field!'),
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = data => {
        api.post("/sessions/", data).then((response) => {
            const token = response.data.access;
            const decoded = jwt_decode(token);
            const userId = decoded.user_id;
            const user = JSON.parse(response.config.data);
             getUser(token, userId)
             localStorage.setItem("@habits:token", JSON.stringify(token))
             localStorage.setItem("@infoUser", JSON.stringify(user.username))
             return history.push("/dashboard")
        }).catch((err) => toast.error("Email ou senha inválidos"))
    };

    if(isLoged() === true){
        return <Redirect to="/dashboard"/>
    }

    return (
    <>
    <LogInContainer>
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="inputs-container">
            <h1>Log In</h1>
            
            <Input register={register} type="text" name='username' label="Username"  placeholder="Username" error={errors.username?.message} icon={AiOutlineUser} width={400}></Input>
        
            <Input register={register} type="password" name='password' label="Password"  placeholder="Safe password" error={errors.password?.message} icon={AiOutlineLock} width={400}></Input>
            <div className="div-button">
            <Button>Log In</Button>
            </div>
        
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
        </FormContainer>
        <div className="div-img">
            <img src={LogInImage} alt="" />
        </div>
        </LogInContainer>
        
        </>
    );
};


export default LogIn;