import BlocoCategory from "@/components/custom/admin/BlocoCategory";
import GlobalButton from "@/components/custom/global/GlobalButton";
import useHookPostCategory from "@/hook/Categoary/hookPostCategory";

import { useEffect } from "react";
import AOS from "aos";
import useHookGetAllCategory from "@/hook/Categoary/hookGetAllCategory";


function AdminCategory() {
    const { handlecategory, setCreateName } = useHookPostCategory();

    const styleInput = "w-full bg-black/60 backdrop-blur-xl rounded-full border-1 border-white text-white py-2 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    const containerCreater = " bg-white/20 backdrop-blur-xl rounded-2xl p-5 shadow-lg shadow-black/20 gap-2.5 || border-1 border-white";
    const styleForm = "flex flex-col gap-2.5 w-full";
    const styleHr = "h-[3px] rounded-full";


    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
        getCategories();
    }, []);

    const { category, getCategories } = useHookGetAllCategory();

    return (
        <main className="py-14 px-2.5 mx-auto max-w-[1220px]">
            <section className="flex gap-2.5 flex-col min-[700px]:flex-row" data-aos="fade-up">

                <div className={`max-w-[400px] w-full m-auto ${containerCreater}`}>
                    <label>Create Category</label>
                    <form onSubmit={handlecategory} className={styleForm}>
                        <input
                            type="text"
                            placeholder="Name Category"
                            className={styleInput}
                            onChange={(e) => setCreateName(e.target.value)}
                        />
                        <GlobalButton children={"Create"} buttonPosition="justify-end" />
                    </form>
                </div>
            </section>

            <div className="py-7"><hr className={styleHr} data-aos="fade-up" /></div>

            <section className="flex flex-wrap gap-3 justify-center items-center">
                {category.map(category => (
                    <BlocoCategory  Name={category.name} idcategory={category.id} />
                ))}
            </section>
        </main>
    );
}

export default AdminCategory;
