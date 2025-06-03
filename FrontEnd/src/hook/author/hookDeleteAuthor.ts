import api from "@/service/apiService";

function useHookDeleteAuthor() {
  const handleDelete = async (deleteId: number) => {
    try {
      await api.delete(`/authors/${deleteId}`);
      location.reload();
    } catch (error) {
    console.log(error);
    alert("To delete the author you must delete all audios linked to it");
    }
  };

  return {
    handleDelete,
  };
}

export default useHookDeleteAuthor;
