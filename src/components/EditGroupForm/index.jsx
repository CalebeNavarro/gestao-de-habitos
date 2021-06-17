import {
    ButtonsDiv,
    NameButton,
    DescriptionButton,
    CategoryButton,
    EditGrouph3,
    EditForm,
    NotifyP
} from "./style";

import Input from "../Input";
import Button from "../Button";
import { GrGroup } from "react-icons/gr";
import { MdDescription } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import {ImCheckboxChecked} from "react-icons/im";
import {AiOutlineExclamationCircle} from "react-icons/ai";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const EditGroupForm = ({id, getGroups}) => {

    const [token]=useState(
        JSON.parse(localStorage.getItem("@habits:token")) || [] 
    )

    const [nameInput, setNameInput] = useState(true);
    const [descriptionInput, setDescriptionInput] = useState(false);
    const [categoryInput, setCategoryInput] = useState(false);

    const schema = yup.object().shape({
        name: yup.string().max(23),
        description: yup.string().max(100),
        category: yup.string().max(23),
      });
    
    const {register,handleSubmit,formState: { errors },reset,} = useForm({
        resolver: yupResolver(schema)
    });

    const notify = (string) => {
        if (string === "success"){
            return toast.success(<NotifyP><ImCheckboxChecked />  Group edited successful</NotifyP>, {
                position: "top-center"
            })
        }
        if (string === "fail"){
            return toast.error(<NotifyP><AiOutlineExclamationCircle />  fails to edit group</NotifyP>, {
                position: "top-center",
                autoClose: false
            });
        }
        return false
    }

    const submitForm = (data) => {
        for(const info in data){
            if(data[info] === ""){
                delete data[info]
            }
        }
        
        api.patch(`/groups/${id}/`, data, {
            headers: {
                Authorization: `Bearer ${token}`
        }})
        .then(response => {
            notify("success");
            reset();
            getGroups();
        })
        .catch(error => {
            console.log(error)
            notify("fail");
        })
    };

    return (
        <>
            <EditGrouph3>Edit group</EditGrouph3>
            <ButtonsDiv>
                <NameButton 
                    onClick={() => setNameInput(!nameInput)} 
                    nameInput={nameInput}
                >
                    Name
                </NameButton>
                <DescriptionButton 
                    onClick={() => setDescriptionInput(!descriptionInput)} 
                    descriptionInput={descriptionInput}
                >
                    Description
                </DescriptionButton>
                <CategoryButton 
                    onClick={() => setCategoryInput(!categoryInput)}
                    categoryInput={categoryInput}
                >
                    Category
                </CategoryButton>
            </ButtonsDiv>
            <EditForm onSubmit={handleSubmit(submitForm)}>
                {nameInput 
                &&  <Input
                        register={register}
                        name="name"
                        label="Groupname"
                        placeholder="Groupname"
                        error={errors.name?.message}
                        icon={GrGroup}
                        width={400}
                    />
                }

                {descriptionInput
                &&  <Input
                        register={register}
                        name="description"
                        label="Description"
                        placeholder="Description"
                        error={errors.description?.message}
                        icon={MdDescription}
                        width={400}
                    />
                }

               {categoryInput
               &&   <Input
                        register={register}
                        name="category"
                        label="Category"
                        placeholder="Category"
                        error={errors.category?.message}
                        icon={AiOutlineAppstoreAdd}
                        width={400}
                    />
                }

                <Button type="submit">Edit group</Button>
            </EditForm>
        </>
    )
}

export default EditGroupForm;