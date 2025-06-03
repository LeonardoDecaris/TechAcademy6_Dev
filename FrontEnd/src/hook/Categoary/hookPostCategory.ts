import api from "@/service/apiService";
import { useState } from "react";

function useHookPostCategory() {
  const [createName, setCreateName] = useState<string>("");
  const handlecategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post("/categories", { name: createName });
      alert("Registro realizado com sucesso!");
      location.reload();
    } catch (error) {
      console.log(error);
      alert("Erro ao realizar o registro.");
    }
  };
  return {
    setCreateName,
    handlecategory,
  };
}

export default useHookPostCategory;
