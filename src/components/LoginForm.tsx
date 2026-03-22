"use client";

import { loginFormSchema, LoginFormType } from "@/lib/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderIcon, LockIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "./shadcnui/button";
import { Checkbox } from "./shadcnui/checkbox";
import { Field, FieldError, FieldLabel } from "./shadcnui/field";
import { Input } from "./shadcnui/input";

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      loginEmail: "",
      loginPassword: "",
      loginRememberMe: true,
    },
    mode: "all",
  });

  const loginHandler = async (loginData: LoginFormType) => {
    await new Promise((r) => setTimeout(r, 1000));

    console.log(loginData);
  };

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
      className="grid gap-4"
      noValidate>
      <Controller
        name="loginEmail"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Email</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="email"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your email"
              autoComplete="email"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="loginPassword"
        control={control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel htmlFor={field.name}>Password</FieldLabel>
            <Input
              {...field}
              id={field.name}
              type="password"
              aria-invalid={fieldState.invalid}
              placeholder="Enter your password"
              autoComplete="current-password"
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="loginRememberMe"
        control={control}
        render={({ field, fieldState }) => (
          <Field
            data-invalid={fieldState.invalid}
            orientation={"horizontal"}>
            <Checkbox
              id={field.name}
              name={field.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <FieldLabel htmlFor={field.name}>RememberMe</FieldLabel>
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Button
        type="submit"
        disabled={isSubmitting}>
        {isSubmitting ?
          <>
            <LoaderIcon /> Logging in...
          </>
        : <>
            <LockIcon /> Login
          </>
        }
      </Button>
    </form>
  );
};

export default LoginForm;
