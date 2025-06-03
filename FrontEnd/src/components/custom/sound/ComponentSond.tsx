import { useAudioController } from "@/controller/audioController";
import imagemSound from "@/assets/image/logoSoudn.png";
import download from "@/assets/icons/download.svg";
import excle from "@/assets/icons/exclusesvg.svg";
import pause from "@/assets/icons/pause.svg";
import { useEffect, useState } from "react";
import play from "@/assets/icons/play.svg";
import Waveform from "./WaveForm";
import AOS from "aos";

import AlertErrorDownload from "../error/AlertErrorDownload";
import AlertUpdateSound from "./AlertUpdateSound";
import AlertDeleteSound from "../error/AlertDeleteSound";


type Props = {
    src: string;
    name: string;
    author: string;
    category: string;
    IdSound?: number;
    className1?: string;
    className2?: string;
};

function ComponentSound({ src, name, author, category, className1, className2, IdSound }: Props) {
    const SyTime = "font-light text-[0.875rem]";
    const SyButton = "bg-black/20 rounded-full border border-white px-2.5 py-[5px]";
    const SyButton2 = "bg-black/20 rounded-full border border-white px-2.5 py-[5px] items-center gap-3";
    const motionButton = "transition-all duration-300 ease-in-out  hover:scale-110";


    const [AccessoDowload, setIsUserLogin] = useState<boolean>(true);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { audioRef, isPlaying, currentTime, duration, togglePlayPause, handleTimeUpdate, handleLoadedMetadata, handleDownload, formatTime, } = useAudioController();

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
    }, [])

    const handleSeekChange = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
    };

    const handleLoginCheck = () => {
        try {
            const token = localStorage.getItem("authToken");
            const isUserLoggedIn = !!token;
            console.log("Token encontrado:", isUserLoggedIn);

            if (!isUserLoggedIn) {
                setErrorMessage("Você precisa estar logado para baixar o áudio.");
                return;
            }

            setIsUserLogin(isUserLoggedIn);
            handleDownload();

        } catch (error) {
            console.log(error);
            alert("Ocorreu um erro ao verificar login.");
        }
    };

    return (
        <section className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white p-2.5 min-[800px]:mr-1.5 flex flex-col gap-2.5 min-[990px]:flex-row min-[990px]:gap-0" data-aos="fade-up">
            <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleLoadedMetadata} />

            {errorMessage && <AlertErrorDownload message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <div className="flex gap-2.5 min-w-[28%] min-[990px]:items-center">
                <img src={imagemSound} alt="lucas pedrozo" className="w-15 rounded-[10px] min-[990px]:w-20" />

                <div>
                    <p className="font-semibold text-[0.875rem]">{name}</p>
                    <div>
                        <p className="font-light text-[0.75rem]">{author}</p>
                        <p className="font-light text-[0.75rem] text-gray-400">{category}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center gap-2.5 min-w-[72%]">
                <div className="flex items-center gap-2.5">
                    <button onClick={togglePlayPause} className={SyButton}>
                        <img alt={name} src={isPlaying ? pause : play} className={isPlaying ? "" : "pl-[2px]"} />
                    </button>

                    <div className="flex gap-1">
                        <span id="currentTime" className={SyTime}>{formatTime(currentTime)}</span>
                        <span className={SyTime}>/</span>
                        <span className={SyTime}>{formatTime(duration)}</span>
                    </div>
                </div>

                <Waveform
                    id="seekBar"
                    min={0}
                    max={Number(duration)}
                    value={[Number(currentTime)]}
                    onValueChange={(value: number[]) => handleSeekChange(value[0])}
                    className="hidden min-[570px]:flex w-[65%]"
                />

                <div className={`${SyButton2} ${className1}`}>
                    <button onClick={() => { handleLoginCheck() }} disabled={!AccessoDowload} className={`${motionButton} hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]`}>
                        <img src={download} alt="Download"/>
                    </button>
                </div>
                <div className={`${SyButton2} ${className2}`} >
                    <AlertUpdateSound valueName={name} valueSoundId={Number(IdSound)} />
                    <AlertDeleteSound IdSound={Number(IdSound)}>
                        <img src={excle} className={`${motionButton} hover:drop-shadow-[0_0_6px_rgba(255,0,0,0.8)]`} />
                    </AlertDeleteSound>
                </div>
            </div>
        </section >
    );
}

export default ComponentSound;
