import {
    AlertDialog,
    AlertDialogCancelPonto,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import FormUpdateSound from "./FormUpdateSound";
import Pen from "@/assets/icons/pen.svg";

type AlertUpdateSoundProps = {
    valueSoundId: number;
    valueName: string;
};

const AlertUpdateSound = ({ valueSoundId, valueName, }: AlertUpdateSoundProps) => {
    const motionButton = "transition-all duration-300 ease-in-out hover:scale-110";

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <button className={`${motionButton} hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)] cursor-pointer`}>
                    <img src={Pen} alt="Edit" />
                </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <div className="flex justify-between">
                        <AlertDialogTitle>Update Sound</AlertDialogTitle>
                        <AlertDialogCancelPonto>X</AlertDialogCancelPonto>
                    </div>
                </AlertDialogHeader>
                <AlertDialogDescription>
                    <FormUpdateSound
                        valeuSoundId={Number(valueSoundId)}
                        valueName={valueName}
                    />
                </AlertDialogDescription>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default AlertUpdateSound;
