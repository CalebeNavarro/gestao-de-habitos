import Input from "../../components/Input"
import {FormContainer, SignUpInContainer} from "./styles"
import SignUpInImage from "../../assets/SignUp.png"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"
import { useHistory, Link, Redirect } from "react-router-dom"
import { AiOutlineUser, AiOutlineLock } from "react-icons/ai"
import Button from "../../components/Button"
import {toast} from 'react-toastify'
import { useContext } from "react"
import { AuthenticateContext } from "../../providers/Authenticate"

const SignUp = () => {
    const history = useHistory()

    const {isLoged} = useContext(AuthenticateContext);

    const schema = yup.object().shape({
        username: yup.string().required('Required field!'),
        password: yup.string().required('Required field!'),
        email: yup.string().email('Invalid email').required('Required field!'),
        passwordConfirmation: yup.string().oneOf([yup.ref("password")], 'Different passwords').required('Required field')
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = ({username, email, password}) =>{
        const user = {username, email,  password}
        
        api.post("/users/", user).then((_) => {
            toast.success('account created')
             return history.push("/login")
        }).catch((err) => toast.error("Error creating account try another email"))
    }

    if(isLoged() === true){
        return <Redirect to="/dashboard"/>
    }

    return (
    <>
    <SignUpInContainer>
        <div className="div-img">
            <img src={SignUpInImage} alt="" />
        </div>
        <FormContainer onSubmit={handleSubmit(onSubmitFunction)}>
        <div className="inputs-container">
            <h1>Sign Up</h1>
            
            <Input register={register} type="text" name='username' label="Name"  placeholder="Username" error={errors.username?.message} icon={AiOutlineUser}></Input>

            <Input register={register} type="email" name='email' label="Email"  placeholder="Your best email" error={errors.email?.message} icon={AiOutlineUser}></Input>

            <Input register={register} type="password" name='password' label="Password"  placeholder="Safe password" error={errors.password?.message} icon={AiOutlineLock}></Input>

            <Input register={register} type="password" name='passwordConfirmation' label="Password confirmation"  placeholder="Password confirmation" error={errors.passwordConfirmation?.message} icon={AiOutlineUser}></Input>
        
            
            <div className="div-button">
            <Button>Sign Up</Button>
            
        </div>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
        </div>
        </FormContainer>
        </SignUpInContainer>
        
        </>
    )
}

export default SignUp;