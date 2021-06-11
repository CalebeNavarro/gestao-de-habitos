import { ActivityForm } from "./style";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { AiOutlineFieldTime } from "react-icons/ai";

const CreateActivityForm = ({id}) => {

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório!'),
        realization_time: yup.string().required('Campo obrigatório!'),
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const [error, setError] = useState(false);
    // const [created, setCreated] = useState(false);

    const submitForm = (data) => {
        data.group = id;
        api.post("/activities/", data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            // setCreated(true)
            // setIsOpened(false)
        })
        .catch(error => setError(true))
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
            <Input 
                register={register}  
                name="realization_time"
                label="Realization time"  
                placeholder="Realization time"  
                error={errors.realization_time?.message}
                icon={AiOutlineFieldTime}
            />
            <Button type="submit"> Create activitie</Button>
            {/* {error && <p>Error creating this goal</p>}
            {created && <p>Goal created</p>} */}
        </ActivityForm>
    )
}

export default CreateActivityForm;