import Context from "store";
import { useForm } from "react-hook-form";
import { useContext } from "react";

export default function Form() {
  const { register: registerUser } = useContext(Context);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleClickSubmit = (formData) => registerUser(formData);

  return (
    <form onSubmit={handleSubmit(handleClickSubmit)}>
      <input placeholder="name" {...register("username")}></input>
      <input
        placeholder="email"
        {...register("email", {
          required: true,
          pattern: {
            value: /^\S+@\S+$/i,
          },
        })}
      ></input>
      {errors.email && <p>This field is required</p>}
      {errors.email && errors.email.type === "pattern" ? (
        <p>This is not an email</p>
      ) : null}
      <input
        placeholder="password"
        {...register("password", { required: true })}
      ></input>
      {errors.password && <p>This field is required</p>}
      <input type="submit" />
    </form>
  );
}
