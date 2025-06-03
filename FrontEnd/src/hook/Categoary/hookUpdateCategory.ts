import api from "@/service/apiService";
import { useForm } from "react-hook-form";
import { Item} from "@/interface/category/InterfaceCategory";


function useHookUpdateCategory() {
    const {register, handleSubmit, formState: { errors }} = useForm<Item>();

    const handleUpdate = async (data: Item, idCategory: number) => {
        if(!idCategory){alert('o id da categoria não foi encontrado')}
        try {
            await api.put(`/categories/${idCategory}`,{
                id: Number(idCategory),
                name: data.name,
            })
            location.reload();
        } catch (error) {
            console.log(error);
            alert('erro ao realizar o update da categoria');
        }
    }

    return {
        register: {
            name: register("name", { required: "Name is required" }),
        },
        handleSubmit,
        handleUpdate,
        errors,
    }
}

export default useHookUpdateCategory;