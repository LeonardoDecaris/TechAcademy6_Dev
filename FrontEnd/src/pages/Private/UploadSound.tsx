import useHookGetAllCategory from "@/hook/Categoary/hookGetAllCategory";
import useHookGetAllAuthor from "@/hook/author/hookGetAllAuthor";
import useHookUploadSound from "@/hook/sound/hookUploadSound";

import GlobalButton from "@/components/custom/global/GlobalButton";
import ComponentSelect from "@/components/custom/global/Select";
import Input from "@/components/custom/global/Input";

import { Controller } from "react-hook-form";
import { useEffect } from "react";
import Aos from "aos";

function UploadSound() {

    const { handleSound, handleSubmit, errors, register, control } = useHookUploadSound();
    const { category, getCategories } = useHookGetAllCategory();
    const { items, getAuthor } = useHookGetAllAuthor();

    const errorStyle = "text-red-500 text-sm font-medium";

    useEffect(() => {
        Aos.init({ duration: 500, delay: 0 });
        getAuthor();
        getCategories();
    }, [getAuthor, getCategories]);

    return (
        <form className="flex flex-col gap-4 max-w-[600px] py-24 mx-auto" onSubmit={handleSubmit(handleSound)} data-aos="fade-up" >
            <h2 className="text-4xl pb-4 font-medium">Upload Sound</h2>

            <section>
                <Input id="name" type="text" placeholder="Name to sound" {...register.name} />
                {errors.name && (
                    <span className={errorStyle}>{errors.name.message}</span>
                )}
            </section>

            <section>
                <Controller control={control} name="author" rules={{ required: "Author is required" }} render={({ field: { onChange, value } }) => (
                    <ComponentSelect placeholder="Select the author" options={items} selectedValue={value} onChange={(val) => onChange(Number(val))} />
                )} />
                {errors.author && (<span className={errorStyle}>{errors.author.message}</span>)}
            </section>

            <section>
                <Controller control={control} name="category" rules={{ required: "Category is required" }} render={({ field: { onChange, value } }) => (
                    <ComponentSelect placeholder="Select the category" options={category} selectedValue={value} onChange={(val) => onChange(Number(val))} />
                )} />
                {errors.category && (<span className={errorStyle}>{errors.category.message}</span>)}
            </section>

            <section>
                <Input id="directory" type="file" placeholder="Directory"  {...register.directory} />
                {errors.directory && (<span className={errorStyle}>{errors.directory.message}</span>)}
            </section>

            <GlobalButton children={"Upload"} buttonPosition="justify-end" />
        </form>
    );
}

export default UploadSound;