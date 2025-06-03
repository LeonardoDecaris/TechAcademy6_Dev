import { UpdateSoundFormData } from "@/interface/sound/interfaceUpdateSound";
import { useForm } from "react-hook-form";
import api from "@/service/apiService";

function useHookUpdateSound() {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<UpdateSoundFormData>();

  const handleUpdate = async (data: UpdateSoundFormData, updateId: number) => {
    try {
      await api.put(`/items/${updateId}`, {
        name: data.name,
        author_id: data.author,
        category_id: data.category,
      });
      alert("Item updated successfully!");
      location.reload();
    } catch (error) {
      console.log(error);
      alert("Error updating item.");
    }
  };

  return {
    register: {
      name: register("name", { required: "Name is required" }),
    },
    control,
    handleSubmit,
    handleUpdate,
    setValue,
    errors,
  };
}

export default useHookUpdateSound;
