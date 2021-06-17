import { 
    GoalForm, 
    NotifyP,
    DifficultySelect,
    DifficultyP, 
    SelectDiv ,
    IconDiv
} from "./style";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import Button from "../Button";
import Input from "../../components/Input";
import { MdSubtitles } from "react-icons/md";
import { AiFillControl } from "react-icons/ai";
import { toast } from "react-toastify" ; 
import {ImCheckboxChecked} from "react-icons/im";
import {AiOutlineExclamationCircle} from "react-icons/ai";

const CreateGoalForm = ({id, getGroups}) => {

    const [selectValue, setSelectValue] = useState("easy");

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const schema = yup.object().shape({
        title: yup.string().required('required!'),
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
        newData.difficulty = selectValue;
        newData.group = id;
        newData.how_much_achieved = 0;
        api.post("/goals/", newData, {
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
        <GoalForm onSubmit={handleSubmit(submitForm)}>
            <Input 
                register={register}  
                name="title" 
                label="Title"  
                placeholder="Title"  
                error={errors.title?.message}
                icon={MdSubtitles}
                width={400}
            />
            <DifficultyP>Difficulty</DifficultyP>
            <SelectDiv>
                <IconDiv>
                    <AiFillControl size={25}/>
                </IconDiv>
                <DifficultySelect 
                    onChange={e => setSelectValue(e.target.value)}
                >
                    <option value="easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </DifficultySelect>
            </SelectDiv>
            <Button type="submit"> Create goal</Button>
        </GoalForm>
    )
}

export default CreateGoalForm;