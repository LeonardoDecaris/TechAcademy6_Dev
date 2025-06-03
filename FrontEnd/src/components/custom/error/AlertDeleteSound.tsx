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
import useHoookDeleteSound from "@/hook/sound/hookDeleteSound";


type AlertLogoutProps = {
    children: React.ReactNode;
    IdSound: number
};

const AlertDeleteSound = ({ children, IdSound }: AlertLogoutProps) => {

    const styleLinkOut = 'border 1 border-red-600 || px-3 py-1.5 rounded-full || font-bold text-red-600 text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';
    const MotionOut = 'bg-black/40 hover:bg-red-600 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_red] hover:scale-103 transition duration-200 transform || font-bold';

    const { handleDelete } = useHoookDeleteSound();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogTitle>
                    Confirm to delete sound
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Are you sure you want to delete this sound? This action cannot be undone.
                </AlertDialogDescription>
                <AlertDialogHeader>

                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <button className={`${styleLinkOut} ${MotionOut}`} onClick={() => handleDelete(IdSound!)}>Confirm</button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default AlertDeleteSound;
