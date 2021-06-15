import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { AiFillControl, AiFillSchedule } from "react-icons/ai";
import { toast } from "react-toastify" ; 
import {ImCheckboxChecked} from "react-icons/im";
import {AiOutlineExclamationCircle, AiOutlineAppstoreAdd} from "react-icons/ai";
import {GiStairsGoal} from "react-icons/gi"

import {Form, NotifyP} from "./styles"

import jwt_decode from "jwt-decode"

const CreateHabitForm = () => {

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const [id, setId]= useState(0)
    useEffect(()=>{
        const decomposedToken=jwt_decode(token)
        setId(decomposedToken.user_id)
    },[token])

    const schema = yup.object().shape({
        category: yup.string().required('Campo obrigatório!'),
        difficulty: yup.string().required('Campo obrigatório!'),
        frequency: yup.string().required('Campo obrigatório!'),
        // achieved: yup.string().required('Campo obrigatório!'),
        title: yup.string().required('Campo obrigatório!')
      })

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    })

    const notify = (string) => {
        if (string === "success"){
            return toast.success(<NotifyP><ImCheckboxChecked />  Goal created successful</NotifyP>, {
                position: "top-center"
            })
        }
        if (string === "fail"){
            return toast.error(<NotifyP><AiOutlineExclamationCircle />  fails to create a new goal</NotifyP>, {
                position: "top-center",
                autoClose: false
            });
        }
        return false
    }

    const submitForm = (data) => {
        const newData = {...data, achieved:false , how_much_achieved:0 , user: id }
        console.log("data", newData)

        api.post("/habits/", newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            console.log(response)
            notify("success")
            reset();
        })
        .catch(error => {
            notify("fail");
        })
    }

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            
            <Input 
                register={register}  
                name="title" 
                label="Title"  
                placeholder="Title"  
                error={errors.title?.message}
                icon={MdSubtitles}
            />
            <Input 
                register={register}  
                name="category" 
                label="Category"  
                placeholder="Category"  
                error={errors.category?.message}
                icon={AiOutlineAppstoreAdd}
            />
            <Input 
                register={register}  
                name="difficulty"
                label="Difficulty"  
                placeholder="Difficulty"  
                error={errors.difficulty?.message}
                icon={AiFillControl}
            />
            <Input 
                register={register}  
                name="frequency"
                label="Frequency"  
                placeholder="Frequency"  
                error={errors.frequency?.message}
                icon={AiFillSchedule}
            />
            {/* <Input 
                register={register}  
                name="achieved"
                label="Achieved"  
                placeholder="Achieved"  
                error={errors.achieved?.message}
                icon={GiStairsGoal}
            /> */}

            <Button type="submit"> Create Habit</Button>
        </Form>
    )
}

export default CreateHabitForm;