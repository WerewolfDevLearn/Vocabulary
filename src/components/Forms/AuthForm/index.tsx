import {
  FormStyles,
  FormLabel,
  FormInput,
  FormInputContainer,
  FormHeading,
  SubmitButton,
} from "./Form.styled";
import FormError from "components/Forms/FromError";

//Types
import { IFormInput, IForm } from "./FormTypes";
import { useAppDispatch } from "reduxfiles/store";
import { authDataType } from "services/serviceTypes";
//Libraries
import { useForm, SubmitHandler } from "react-hook-form";
import { userAuth } from "reduxfiles/operations/auth/authOps";
// import { DevTool } from "@hookform/devtools";

export default function Form({ formName }: IForm) {
  const dispatch = useAppDispatch();

  const { register, formState, handleSubmit } = useForm<IFormInput>({
    mode: "onChange",
  });
  const { errors, dirtyFields } = formState;

  const isDirtyName = !!dirtyFields.name;
  const isValidName = !errors.name;
  const isDirtyEmail = !!dirtyFields.email;
  const isValidEmail = !errors.email;
  const isDirtyPassword = !!dirtyFields.password;
  const isValidPassword = !errors.password;

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const authData: authDataType =
      formName === "Register"
        ? { type: "Register", ...data }
        : { type: "Login", email: data.email, password: data.password };
    dispatch(userAuth(authData));
  };

  return (
    <>
      <FormStyles onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormHeading>{formName}</FormHeading>
        {formName === "Register" && (
          <div>
            <FormLabel htmlFor="name">name</FormLabel>
            <FormInputContainer>
              <FormInput
                {...register("name", {
                  required: "This field is required",
                  minLength: {
                    value: 3,
                    message: "Name must be longer than 3 symbols",
                  },
                })}
                placeholder="Name"
                type="text"
                key="Name"
                $isValid={isValidName}
                $isDirty={isDirtyName}
                id="name"
                aria-invalid={errors.name ? "true" : "false"}
              />
            </FormInputContainer>
            <FormError string={errors.name?.message} />
          </div>
        )}
        <div>
          <FormLabel>e-mail</FormLabel>
          <FormInputContainer>
            <FormInput
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="E-mail"
              type="email"
              key="Email"
              $isValid={isValidEmail}
              $isDirty={isDirtyEmail}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </FormInputContainer>
          <FormError string={errors.email?.message} />
        </div>
        <div>
          <FormLabel>password</FormLabel>
          <FormInputContainer>
            <FormInput
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "`Name must be longer than 7 symbols`",
                },
              })}
              placeholder="Password"
              type="password"
              key="Password"
              $isValid={isValidPassword}
              $isDirty={isDirtyPassword}
              aria-invalid={errors.password ? "true" : "false"}
            />
          </FormInputContainer>
          <FormError string={errors.password?.message} />
        </div>
        <SubmitButton type="submit">{formName}</SubmitButton>
      </FormStyles>
      {/* <DevTool control={control} /> */}
    </>
  );
}
