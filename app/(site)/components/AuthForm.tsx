"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import AuthSocialButton from "./AuthSocialButton";

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("REGISTER");
  const [isLoading, setIsLoading] = useState(false);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      //Axios Register
    }

    if (variant === "LOGIN") {
      //NextAuth SignIn
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    //NextAuth Social Sign In
  };

  return (
    <div
      className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
      "
    >
      <div
        className="
        bg-white
        px-4
        py-8
        shadow
        sm:rounded-lg
        sm:px-10
      "
      >
        <form
          className="space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              placeholder="Enter your name"
              register={register}
              errors={errors}
            />
          )}
          <Input
            label="Email"
            id="email"
            placeholder="Enter your email address"
            register={register}
            errors={errors}
          />
          <Input
            id="password"
            label="Password"
            placeholder="Enter your password"
            type="password"
            register={register}
            errors={errors}
          />
          <div>
            <Button
              disabled={isLoading}
              fullWidth
              type="submit"
            >
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="
                absolute
                inset-0
                flex
                items-center
              "
            >
              <div
                className="
                  w-full
                  border-t
                  border-gray-300
                "
              />
            </div>
            <div
              className="
                  relative
                  flex
                  justify-center
                  text-sm
                "
            >
              <span
                className="
                  bg-white
                  px-2 text-gray-500
                "
              >
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
