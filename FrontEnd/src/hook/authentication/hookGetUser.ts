import { mapUsers } from "@/interface/authentication/interfaceApiUsers";
import api from "@/service/apiService";
import { useState, useEffect } from "react";

function useHookGetUser() {
  const idUser = localStorage.getItem("userId");
  const [userAtributes, setUserAttributes] = useState<mapUsers>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserById();
  }, []);

  const maskCPF = (cpf: string): string => {
    const numericCPF = cpf.replace(/\D/g, "");
    return numericCPF.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "***.***.$3-$4"
    );
  };

  const getUserById = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/users/${idUser}`);
      if (data.cpf) {
        data.cpf = maskCPF(data.cpf);
      }
      setUserAttributes(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    userAtributes,
    setUserAttributes,
    getUserById,
    loading,
    setLoading,
  };
}

export default useHookGetUser;
