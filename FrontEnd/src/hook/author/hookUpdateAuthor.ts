import api from "@/service/apiService";
import { interfaceUpdateAuthor } from "@/interface/author/interfaceAuthor";
import { useForm } from "react-hook-form";


function useHookUpdateAuthor() {
    const {register, handleSubmit, formState: { errors }} = useForm<interfaceUpdateAuthor>();

    const handleUpdate = async (data: interfaceUpdateAuthor, idAuthor: number) => {
        if(!idAuthor){alert('o id do author não foi encontrado')}
        try {
            await api.put(`/authors/${idAuthor}`,{
                id: Number(idAuthor),
                name: data.name,
            })
            location.reload();
        } catch (error) {
            console.log(error);
            alert('erro ao realizar o update do author');
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

export default useHookUpdateAuthor;