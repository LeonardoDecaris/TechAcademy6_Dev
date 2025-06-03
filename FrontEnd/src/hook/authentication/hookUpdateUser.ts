import { FormValues } from "@/interface/authentication/interfaceRerigister";
import { useForm } from "react-hook-form";
import api from "@/service/apiService";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { validateName } from "@/utils/UserValidation";

function useHookUpdateUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onSubmit" });

  const { logout } = useAuth();
  const nevagate = useNavigate();

  const handleUpdadeUser = async (data: { name?: string }) => {
    try {
      const userId = localStorage.getItem("userId");

      await api.put(`/users/${userId}`, {
        name: data.name,
      });
      logout();
      nevagate("/home");
      location.reload()
      alert("Update completed successfully!");
    } catch (error) {
      console.log(error);
      alert("Error updating user.");
    }
  };

  return {
    register: {
      name: register("name", {
        required: "Name is mandatory",
        validate: validateName,
      }),
    },
    handleSubmit,
    handleUpdadeUser,
    errors,
  };
}

export default useHookUpdateUser;
