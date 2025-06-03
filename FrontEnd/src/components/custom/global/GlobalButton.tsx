type Props = {
    children?: React.ReactNode;
    icons?: string;
    buttonPosition?: string;
    disabled?: boolean;
    className?: string;
    onClick?: () => void;
    id?: string;
    to?: string
}

const GlobalButton = ({ children, icons, buttonPosition, disabled, className, onClick }: Props) => {

    const motionButton: string = "shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:shadow-[0_0_8px_rgba(255,255,255,0.6)] transition duration-500 transform hover:scale-105";
    const styleButton: string = "bg-white rounded-full font-bold text-black px-5 py-2 cursor-pointer";
    const styleDiv: string = "flex items-center pt-5 px-2.5";

    return (
        <div className={`${styleDiv} ${buttonPosition}`}>
            <button type="submit" className={`${styleButton} ${motionButton} ${className}`} disabled={disabled} onClick={onClick}>
                {children}
                {icons}
            </button>
        </div>
    )
}


export default GlobalButton;


export const ButtonClose = ({ children, icons, buttonPosition, disabled, className, onClick, id }: Props) => {

    const MotionOut = 'bg-black/40 hover:bg-red-600 hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_red] hover:scale-103 transition duration-200 transform || font-bold';
    const styleLinkOut = 'border 1 border-red-600 || px-5 py-2 rounded-full || font-semibold text-red-600 text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]';
    const styleDiv = "flex items-center pt-5 px-2.5";

    return (
        <div className={`${styleDiv} ${buttonPosition}`}>
            <button className={`${styleLinkOut} ${MotionOut} ${className}`} disabled={disabled} onClick={onClick} id={id}>
                {children}
                {icons}
            </button>
        </div>
    );
}

export const ButtonDown = ({ children, icons, buttonPosition, disabled, className, onClick, id }: Props) => {

    const styleLink = "bg-black/40 hover:bg-white border 1 border-white || px-5 py-2 rounded-full || font-bold text-white hover:text-black text-[14px] || shadow-[0px_2px_10px_rgba(0,0,0,0.6)]";
    const MotionZoom = 'drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] hover:scale-103 transition duration-200 transform';
    const styleDiv = "flex items-center pt-5 px-2.5";

    return (
        <div className={`${styleDiv} ${buttonPosition}`}>
            <button className={`${styleLink} ${MotionZoom} ${className}`} disabled={disabled} onClick={onClick} id={id}>
                {children}
                {icons}
            </button>
        </div>
    );
}
