import { GoalForm, NotifyP } from "./style";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { AiFillControl, AiFillSchedule } from "react-icons/ai";
import { toast } from "react-toastify" ; 
import {ImCheckboxChecked} from "react-icons/im";
import {AiOutlineExclamationCircle} from "react-icons/ai";

const CreateGoalForm = ({id}) => {

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório!'),
        difficulty: yup.string().required('Campo obrigatório!'),
        how_much_achieved: yup.string().required('Campo obrigatório!')
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
        const newData = data
        newData.group = id;
        api.post("/goals/", newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            notify("success")
            reset();
        })
        .catch(error => {
            notify("fail");
        })
    }

    return (
        <GoalForm onSubmit={handleSubmit(submitForm)}>
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
                name="difficulty"
                label="Difficulty"  
                placeholder="Difficulty"  
                error={errors.difficulty?.message}
                icon={AiFillControl}
            />
            <Input 
                register={register}  
                name="how_much_achieved"
                label="How much achieved"  
                placeholder="How much achieved"  
                error={errors.how_much_achieved?.message}
                icon={AiFillSchedule}
            />
            <Button type="submit"> Create goal</Button>
        </GoalForm>
    )
}

export default CreateGoalForm;