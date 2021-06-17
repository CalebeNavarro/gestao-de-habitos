import { Form } from "./styles";
import Input from "../Input";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import Select from "./../Select";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGroups } from "../../providers/Groups";

const FormSearchCategory = () => {
  const { searchGroups } = useGroups();

  const formSchema = yup.object().shape({
    category: yup.string(),
    change: yup.string(),
  });

  const {
    handleSubmit,
    formState: errors,
    reset,
    register,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    if (data.change !== "-- Category suggestion --") {
      searchGroups(data.change);
    } else {
      searchGroups(data.category);
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <Select
        name="change"
        options={[
          "-- Category suggestion --",
          "Saúde",
          "Academia",
          "Healthy",
          "Educação",
          "Musica",
          "Jogos",
          "Study",
        ]}
        register={register}
      />

      <span>Or</span>

      <Input
        icon={HiOutlineDocumentSearch}
        error={errors.category?.message}
        register={register}
        name="category"
        placeholder="Group Category"
      />
      <button type="submit">Search</button>
    </Form>
  );
};

export default FormSearchCategory;
