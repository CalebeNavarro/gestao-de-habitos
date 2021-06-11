import { GoalForm } from "./style";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { AiFillControl, AiFillSchedule } from "react-icons/ai";

const CreateGoalForm = ({id}) => {

    const [token, setToken]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        title: yup.string().required('Campo obrigatório!'),
        difficulty: yup.string().required('Campo obrigatório!'),
        how_much_achieved: yup.string().required('Campo obrigatório!')
      })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const [error, setError] = useState(false);
    // const [created, setCreated] = useState(false);

    const submitForm = (data) => {
        const newData = data
        newData.group = id;
        api.post("/goals/", newData, {
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
            {/* {error && <p>Error creating this goal</p>}
            {created && <p>Goal created</p>} */}
        </GoalForm>
    )
}

export default CreateGoalForm;