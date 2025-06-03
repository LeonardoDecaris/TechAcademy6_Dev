import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogCancel,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/context/AuthContext";
import useHookDelete from "@/hook/authentication/hookDeleteUser";
import { useNavigate } from "react-router-dom";

type AlertLogoutProps = {
    children: React.ReactNode;
};

const AlertDelete = ({ children }: AlertLogoutProps) => {

    const styleLinkOut = 'border 1 border-red-600 || px-3 py-1.5 rounded-full || font-bold text-red-600 text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';
    const MotionOut = 'bg-black/40 hover:bg-red-600 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_red] hover:scale-103 transition duration-200 transform || font-bold';
    const { handleDelete } = useHookDelete();
    const Navigate = useNavigate();
    const { logout } = useAuth();

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                    <AlertDialogTitle>        
                        Are you sure you want to delete your username?
                    </AlertDialogTitle>
                <AlertDialogHeader>

                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <button className={`${styleLinkOut} ${MotionOut}`} onClick={() => { Navigate('/home'); handleDelete(); logout(); }}>Confirm</button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertDelete;
