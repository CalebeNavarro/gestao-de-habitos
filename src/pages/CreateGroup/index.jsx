import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Container, StyledForm } from "./styled";
import Img from "../../assets/img_create_group.png";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Redirect } from "react-router-dom";
import { GrGroup } from "react-icons/gr";
import { MdDescription } from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthenticateContext } from "../../providers/Authenticate";

const CreateGroup = () => {
  const { isLoged } = useContext(AuthenticateContext);

  const [token] = useState(
    JSON.parse(localStorage.getItem("@habits:token")) || []
  );

  const schema = yup.object().shape({
    name: yup.string().required("Required!").max(23),
    description: yup.string().required("Required!").max(100),
    category: yup.string().required("Required!").max(23),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    api
      .post("/groups/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        toast.success("Group created");
      })
      .catch((err) => {
        toast.error("Erro ao criar o grupo! ");
      });

    reset();
  };

  if (isLoged() === false) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <Header page="creategroup" />

      <h1>Create Group</h1>

      <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          name="name"
          label="Groupname"
          placeholder="Groupname"
          error={errors.name?.message}
          icon={GrGroup}
          width={400}
        />

        <Input
          register={register}
          name="description"
          label="Description"
          placeholder="Description"
          error={errors.description?.message}
          icon={MdDescription}
          width={400}
        />

        <Input
          register={register}
          name="category"
          label="Category"
          placeholder="Category"
          error={errors.category?.message}
          icon={AiOutlineAppstoreAdd}
          width={400}
        />

        <Button widthDesktop={400}>Criar grupo</Button>
      </StyledForm>

      <Footer img={Img} fixDiv>
        Em um grupo é possível unir forças para vencer dificuldades que pareciam
        impossíveis. Crie um grupo e chame seus colegas para participarem!
      </Footer>
    </Container>
  );
};

export default CreateGroup;
