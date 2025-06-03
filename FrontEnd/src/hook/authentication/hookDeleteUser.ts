import { useAuth } from "@/context/AuthContext";
import api from "@/service/apiService";

function useHookDelete() {
  const { logout } = useAuth();

  const handleDelete = async () => {
    try {

      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("Usuário não encontrado.");
        return;
      }
      await api.delete(`/users/${userId}`);
      alert("Usuario excluído com sucesso");
      logout();
    } catch (error) {
      alert('erro ao deletar o user');
      console.log(error)
    }
  };

  return {
    handleDelete,
  };
}

export default useHookDelete;
