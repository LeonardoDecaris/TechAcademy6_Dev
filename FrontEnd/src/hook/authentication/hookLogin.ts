import { FormValues } from "@/interface/authentication/interfaceLogin";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { validateEmail, validatePasswordLogin } from "@/utils/UserValidation";
import api from "@/service/apiService";

function useHookLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [desabledLogin, setDesabledLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleLogin = async (data: FormValues) => {
    setDesabledLogin(true);
    setErrorMessage(null);
    try {
      const response = await api.post("/login", {
        email: data.email,
        password: data.password,
      });

      const { token } = response.data;
      login(token);
      navigate("/home");
      window.location.reload();
    } catch (error) {
      setErrorMessage("Error: Invalid email or password.");
      console.log(error);
    } finally {
      setDesabledLogin(false);
    }
  };

  return {
    register: {
      email: register("email", {
        required: "Email is mandatory",
        validate: validateEmail,
      }),
      password: register("password", {
        required: "Password is mandatory",
        validate: validatePasswordLogin,
      }),
    },
    handleSubmit,
    handleLogin,
    errors,
    desabledLogin,
    errorMessage,
    setErrorMessage,
  };
}

export default useHookLogin;
