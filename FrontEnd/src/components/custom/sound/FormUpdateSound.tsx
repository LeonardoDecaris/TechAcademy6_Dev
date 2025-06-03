import { useEffect } from "react";
import { Controller } from "react-hook-form";
import Input from "@/components/custom/global/Input";
import ComponentSelect from "@/components/custom/global/Select";
import GlobalButton from "@/components/custom/global/GlobalButton";
import useHookGetAllCategory from "@/hook/Categoary/hookGetAllCategory";
import useHookGetAllAuthor from "@/hook/author/hookGetAllAuthor";
import useHookUpdateSound from "@/hook/sound/hookUpdateSound";

type InputProps = {
    valeuSoundId: number;
    valueName: string;
};

const FormUpdateSound = ({ valeuSoundId, valueName, }: InputProps) => {

    const { register, control, errors, handleSubmit, handleUpdate, setValue } = useHookUpdateSound();
    const { category, getCategories } = useHookGetAllCategory();
    const { items, getAuthor } = useHookGetAllAuthor();
    const errorStyle = "text-red-500 text-sm font-medium";

    useEffect(() => {
        setValue("name", valueName);
        getAuthor();
        getCategories();
    }, [getAuthor, getCategories, setValue, valueName]);

    return (

        <form className="flex flex-col gap-4 mx-auto" onSubmit={handleSubmit((data) => handleUpdate(data, valeuSoundId))}>

            <section>
                <Input id="name" type="text" placeholder="Name to sound" {...register.name} />
                {errors.name && <span className={errorStyle}>{errors.name.message}</span>}
            </section>

            <section>
                <Controller
                    control={control}
                    name="author"
                    rules={{ required: "Author is required" }}
                    render={({ field: { onChange, value } }) => (
                        <ComponentSelect
                            placeholder="Select the author"
                            options={items}
                            selectedValue={value}
                            onChange={(val) => onChange(Number(val))}
                        />
                    )}
                />
                {errors.author && <span className={errorStyle}>{errors.author.message}</span>}
            </section>

            <section>
                <Controller
                    control={control}
                    name="category"
                    rules={{ required: "Category is required" }}
                    render={({ field: { onChange, value } }) => (
                        <ComponentSelect
                            placeholder="Select the category"
                            options={category}
                            selectedValue={value}
                            onChange={(val) => onChange(Number(val))}
                        />
                    )}
                />
                {errors.category && <span className={errorStyle}>{errors.category.message}</span>}
            </section>

            <GlobalButton children={"Update"} buttonPosition="justify-end" />

        </form>
    );
};

export default FormUpdateSound;