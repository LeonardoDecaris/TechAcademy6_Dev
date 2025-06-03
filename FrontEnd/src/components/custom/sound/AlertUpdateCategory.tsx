import {
    AlertDialog,
    AlertDialogCancelPonto,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";


import { ButtonDown } from "../global/GlobalButton";
import Input from "../global/Input";
import useHookUpdateCategory from "@/hook/Categoary/hookUpdateCategory";

type AlertUpdateCategoryProps = {
    children: React.ReactNode;
    idCategory: number;
    categoryName?: string;
}

const AlertUpdateCategory = ({ children, idCategory, categoryName }: AlertUpdateCategoryProps) => {
    const { register, handleSubmit, handleUpdate, errors } = useHookUpdateCategory();

    const styleForm = "flex flex-col gap-2.5";
    const errorStyle = "text-red-500 text-sm pl-5";

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <section className="flex justify-between">
                        <AlertDialogTitle>Update Category</AlertDialogTitle>
                        <AlertDialogCancelPonto>X</AlertDialogCancelPonto>
                    </section>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    <section className="w-full" data-aos="fade-up">
                        <label>Update Category Name</label>
                        <form onSubmit={handleSubmit((data) => handleUpdate(data, idCategory))} className={styleForm}>
                            <section>
                                <Input {...register.name} type="text" placeholder="Category Name" defaultValue={categoryName} />
                                 {errors.name && <span className={errorStyle} data-aos="fade">{errors.name.message}</span>}
                               </section>
                            <ButtonDown id="btnUpdate" children={"Update"} buttonPosition="justify-end" />
                        </form>
                    </section> 
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertUpdateCategory;
