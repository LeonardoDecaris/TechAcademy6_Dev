import { FormValues } from "@/interface/authentication/interfaceNewPassword";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "@/service/apiService";
import axios from "axios";

import {
  validatePassword,
  validateConfirmPassword,
} from "@/utils/UserValidation";
import { useState } from "react";

export function useHookNewPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const password = watch("password");
  const nevagate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleNewPassword = async (data: { password: string }) => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("Usuário não encontrado.");
        return;
      }

      await api.put(`/users/${userId}`, {
        password: data.password,
      });
      nevagate("/login");
      location.reload();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error?.response?.data?.error
          ? error.response.data.error
              .map((e: { message: string }) => e.message)
              .join(", ")
          : "Erro ao cadastrar";
        setErrorMessage(errorMessage);
      }
    }
  };

  return {
    register: {
      password: register("password", {
        required: "Password is mandatory",
        validate: validatePassword,
      }),
      confirmPassword: register("confirmPassword", {
        required: "Confirm password is mandatory",
        validate: (value) => validateConfirmPassword(value, password),
      }),
    },
    handleSubmit,
    handleNewPassword,
    watch,
    errors,
    password,
    errorMessage,
    setErrorMessage,
  };
}
