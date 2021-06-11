import { Container, Form } from "./styles";
import Input from "../Input";
import { HiOutlineDocumentSearch } from "react-icons/hi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useGroups } from "../../providers/Groups";

const FormSearchCategory = () => {
  const { searchGroups } = useGroups();

  const formSchema = yup.object().shape({
    category: yup.string(),
  });

  const {
    handleSubmit,
    formState: errors,
    reset,
    register,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = ({ category }) => {
    searchGroups(category);
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        <Input
          icon={HiOutlineDocumentSearch}
          error={errors.category?.message}
          register={register}
          name="category"
          placeholder="Group Category"
        />

        <button type="submit">Search</button>
      </Form>
    </Container>
  );
};

export default FormSearchCategory;
