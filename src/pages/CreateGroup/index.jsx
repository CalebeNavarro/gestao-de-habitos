import Footer from "../../components/Footer"
import Header from "../../components/Header"
import {Container, StyledForm} from "./styled"
import Img from "../../assets/img_create_group.png"
import Input from "../../components/Input"
import Button from "../../components/Button"

import{GrGroup} from "react-icons/gr"
import{MdDescription} from "react-icons/md"
import {AiOutlineAppstoreAdd} from "react-icons/ai"

import {useForm} from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"
import {toast} from 'react-toastify'
import { useState } from "react"

const CreateGroup = () => {

    const [token, setToken]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        groupname: yup.string().required('Campo obrigatório!'),
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
                "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
            }
        } ).then((resp)=>{
            console.log("token", token)
            console.log("resp api", resp.data)


        }).catch((err) => {
            console.log("token", token)
            console.log(err)
            toast.error("Erro ao criar o grupo! ")
        })
    }

    return (
       
         <Container> 
        <Header page="creategroup" />

        <h1>Create new group</h1>
        <StyledForm onSubmit={handleSubmit(onSubmitFunction)} >

        <Input 
        register={register}  
        name='groupname' 
        label="Groupname"  
        placeholder="Groupname"  
        error={errors.groupname?.message}
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