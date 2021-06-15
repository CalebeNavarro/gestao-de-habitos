import { ActivityForm, NotifyP } from "./style";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { toast } from "react-toastify" ; 
import {ImCheckboxChecked} from "react-icons/im";
import {AiOutlineExclamationCircle} from "react-icons/ai";

const CreateActivityForm = ({id, getGroups}) => {

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório!'),
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
        newData.realization_time = new Date();
        newData.group = id;
        api.post("/activities/", newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            notify("success")
            reset();
            getGroups();
        })
        .catch(error => {
            notify("fail");
        })
    }

    return (
        <ActivityForm onSubmit={handleSubmit(submitForm)}>
            <Input 
                register={register}  
                name="title" 
                label="Title"  
                placeholder="Title"  
                error={errors.title?.message}
                icon={MdSubtitles}
            />
            <Button type="submit"> Create activitie</Button>
        </ActivityForm>
    )
}

export default CreateActivityForm;