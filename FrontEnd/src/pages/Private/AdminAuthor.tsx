import GlobalButton from "@/components/custom/global/GlobalButton";
import useHookGetAllAuthor from "@/hook/author/hookGetAllAuthor";
import BlocoAuthor from "@/components/custom/admin/BlocoAuthor";

import { useEffect, useState } from "react";
import api from "@/service/apiService";
import AOS from "aos";


function AdminCategory() {

    const styleInput = "w-full bg-black/60 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const containerCreater = " bg-white/20 backdrop-blur-xl rounded-2xl p-5 shadow-lg shadow-black/20 gap-2.5 || border-1 border-white";
    const styleForm = "flex flex-col gap-2.5 w-full";

    const { items, getAuthor } = useHookGetAllAuthor();
    const [createName, setCreateName] = useState("");
    

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getAuthor();
    }, []);

    const handleSound = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await api.post("/authors", { name: createName });
            alert("Registro realizado com sucesso!");
            location.reload();
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar o registro.");
        }
    };


    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px] min-h-[51vh]">
            <section className="flex gap-2.5 flex-col min-[700px]:flex-row pb-7" data-aos="fade-up">
                <div className={`max-w-[400px] w-full m-auto ${containerCreater}`}>
                    <label className="pl-5 ">Create Author</label>
                    <form onSubmit={handleSound} className={styleForm}>
                        <input
                            type="text"
                            placeholder="Name authors"
                            className={styleInput}
                            value={createName}
                            onChange={(e) => setCreateName(e.target.value)}
                        />
                        <GlobalButton children={"Create"} buttonPosition="justify-end" />
                    </form>
                </div>
            </section>

            <section className="flex flex-wrap justify-center items-center gap-3">
                {items.map(author => (
                    <BlocoAuthor Name={author.name} idAuthor={author.id} />
                ))}
            </section>

        </main>
    );
}

export default AdminCategory;
