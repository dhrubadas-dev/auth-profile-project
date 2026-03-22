"use client";

import { registerFormSchema, RegisterFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { handleSubmit } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      registerName: "",
      registerEmail: "",
      registerPassword: "",
      registerConfirmPassword: "",
    },
    mode: "all",
  });

  const registerHandler = async (registerData: RegisterFormType) => {
    await new Promise((r) => setTimeout(r, 1000));

    console.log(registerData);
  };

  return <></>;
};

export default RegisterForm;
