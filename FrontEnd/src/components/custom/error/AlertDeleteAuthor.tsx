import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogCancel,
    AlertDialogTrigger,
    AlertDialogDescription
} from "@/components/ui/alert-dialog";
import useHookDeleteAuthor from "@/hook/author/hookDeleteAuthor";


type AlertLogoutProps = {
    children: React.ReactNode;
    idAuthor?: number
    authorName?: string;
};

const AlertDeleteAuthor = ({ children: children, idAuthor }: AlertLogoutProps) => {

    const styleLinkOut = 'border 1 border-red-600 || px-3 py-1.5 rounded-full || font-bold text-red-600 text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';
    const MotionOut = 'bg-black/40 hover:bg-red-600 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_red] hover:scale-103 transition duration-200 transform || font-bold';

    const { handleDelete } = useHookDeleteAuthor();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Confirm to delete author
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Are you sure you want to delete this author? This action cannot be undone.
                </AlertDialogDescription>
                <AlertDialogHeader>

                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <button id="btnDelete" className={`${styleLinkOut} ${MotionOut}`} onClick={() => {handleDelete(idAuthor!)}}>Confirm</button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default AlertDeleteAuthor;
