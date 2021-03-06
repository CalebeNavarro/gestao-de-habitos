import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { AiFillSchedule } from "react-icons/ai";
import { toast } from "react-toastify" ; 
import {ImCheckboxChecked} from "react-icons/im";
import {AiOutlineExclamationCircle, AiOutlineAppstoreAdd} from "react-icons/ai";
import Select from './../Select';

import {Form, NotifyP} from "./styles";

import jwt_decode from "jwt-decode";

const CreateHabitForm = ({ func }) => {
    const [id, setId] = useState(0)

    const [token] = useState (
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    );

    useEffect(() => {
        const decomposedToken=jwt_decode(token)
        setId(decomposedToken.user_id)
    }, [token])

    const schema = yup.object().shape({
        category: yup.string().required('Required!'),
        difficulty: yup.string().required('Required!'),
        frequency: yup.string().required('Required!'),
        title: yup.string().required('Required!')
    });

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    });

    const notify = (string) => {
        if (string === "success"){
            return toast.success(<NotifyP><ImCheckboxChecked />  Successfully created habit</NotifyP>, {
                position: "top-center"
            })
        }
        if (string === "fail"){
            return toast.error(<NotifyP><AiOutlineExclamationCircle />  fails to create a new habit</NotifyP>, {
                position: "top-center",
                autoClose: false
            });
        }
        return false
    };

    const submitForm = (data) => {
        const newData = {...data, achieved:false, user: id, how_much_achieved: 0 };

        api.post("/habits/", newData, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
            .then(response => {
                notify("success")
                reset();
                func();
            })
            .catch(error => {
                notify("fail");
            })

    };

    return (
        <Form onSubmit={handleSubmit(submitForm)}>
            <Select
                name="difficulty"
                options={[
                "Easy",
                "Medium",
                "Hard",
                ]}
                register={register}
            />
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
                name="frequency"
                label="Frequency"  
                placeholder="Frequency"  
                error={errors.frequency?.message}
                icon={AiFillSchedule}
            />

            <Button type="submit"> Create Habit</Button>
        </Form>
    )
};

export default CreateHabitForm;