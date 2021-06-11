import Footer from "../../components/Footer"
import Header from "../../components/Header"
import {Container, StyledForm} from "./styled"
import Img from "../../assets/img_create_group.png"
import Input from "../../components/Input"
import Button from "../../components/Button"
import {Redirect} from "react-router-dom"
import{GrGroup} from "react-icons/gr"
import{MdDescription} from "react-icons/md"
import {AiOutlineAppstoreAdd} from "react-icons/ai"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"
import {toast} from 'react-toastify'
import { useContext, useState } from "react"
import { AuthenticateContext } from "../../providers/Authenticate"

const CreateGroup = () => {
    const {isLoged} = useContext(AuthenticateContext)

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        name: yup.string().required('Campo obrigatório!'),
        description: yup.string().required('Campo obrigatório!'),
        category: yup.string().required('Campo obrigatório!')
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction= data=>{
        console.log("data",data)

        
        api.post("/groups/", data, {
            headers: { 
             Authorization: `Bearer ${token}`,
            }
        } ).then((resp)=>{
            console.log("token", token)
            console.log("resp api", resp)


        }).catch((err) => {
            console.log("token", token)
            console.log(err)
            toast.error("Erro ao criar o grupo! ")
        })
    }

    if (isLoged() === false){
        return <Redirect to="/"/>;
      }

    return (
       
         <Container> 
        <Header page="creategroup" />

        <h1 >Create Group</h1>
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)} >

        <Input 
        register={register}  
        name='name' 
        label="Groupname"  
        placeholder="Groupname"  
        error={errors.name?.message}
        icon={GrGroup}/>

        <Input 
        register={register}  
        name='description' 
        label="Description"  
        placeholder="Description"  
        error={errors.description?.message}
        icon={MdDescription}/>

        <Input 
        register={register}  
        name='category' 
        label="Category"  
        placeholder="Category"  
        error={errors.category?.message}
        icon={AiOutlineAppstoreAdd}/>

        <Button 
        widthDesktop={450} >
            Criar grupo
        </Button>
        
        </StyledForm>
        <br></br>

        <Footer img={Img} >
            Os grupos sao importantes na inserção no 
            convívio social e auxiliara voce a ver atividades e metas
            em comum.

        </Footer>

         </Container> 

    
    )
}

export default CreateGroup;