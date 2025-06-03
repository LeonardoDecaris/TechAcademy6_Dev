import {
    AlertDialog,
    AlertDialogCancelPonto,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import useHookUpdateAuthor from "@/hook/author/hookUpdateAuthor";
import { ButtonDown } from "../global/GlobalButton";
import Input from "../global/Input";

type AlertUpdateAthorProps = {
    children: React.ReactNode;
    idAuthor: number;
    authorName: string;
}

const AlertUpdateAthor = ({ children, idAuthor, authorName }: AlertUpdateAthorProps) => {
    const { register, handleSubmit, handleUpdate, errors } = useHookUpdateAuthor();

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
                        <AlertDialogTitle>Update Author</AlertDialogTitle>
                        <AlertDialogCancelPonto>X</AlertDialogCancelPonto>
                    </section>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    <section className="w-full" data-aos="fade-up">
                        <label>Update Author Name</label>
                        <form onSubmit={handleSubmit((data) => handleUpdate(data, idAuthor))} className={styleForm}>
                            <section>
                                <Input {...register.name} type="text" placeholder="Author Name" defaultValue={authorName} />
                                 {errors.name && <span className={errorStyle} data-aos="fade">{errors.name.message}</span>}
                               </section>
                            <ButtonDown id="btnUpdate" children={"Update"} buttonPosition="justify-end"/>
                        </form>
                    </section> 
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertUpdateAthor;
