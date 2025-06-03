import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ButtonUserActive from "./ButtonUserActive";
import ButtonLogin from "./ButtonLogin";
import MenuHeader from "./MenuHeader";

import logoGit from "@/assets/icons/github.svg";
import logoSite from "@/assets/image/Mask.png";

const Header = () => {
    const [isUserLogin, setIsUserLogin] = useState<boolean>(false);

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem("authToken");
            setIsUserLogin(!!token);
        };

        checkToken();
        window.addEventListener("storage", checkToken);
        return () => {
            window.removeEventListener("storage", checkToken);
        };
    }, []);

    const MotionZoom = "hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] || hover:scale-105 transition transform duration-300 || font-semibold text-white/50 hover:text-white";
    const StyleHeader = "bg-[#232323]/50 backdrop-blur-md rounded-full min-[1000px]:max-w-[700px] mt-5 mx-2.5 min-[1000px]:mx-auto";
    const MotionHeader = "animate-fade-down animate-duration-500 animate-ease-out animate-normal";

    return (
        <header className={`${MotionHeader} ${StyleHeader}`}>
            <section className={`px-5 py-2.5 flex justify-between items-center gap-5 `}>

                <nav className="flex items-center gap-5">
                    <Link to={"/home"}>
                        <img
                            src={logoSite}
                            alt="Harmonic Sound"
                            className="w-9 rounded-full"
                        />
                    </Link>

                    <ul className="hidden min-[1000px]:flex gap-5">
                        <li>
                            <Link to={"/home"} id="home" className={`${MotionZoom}`}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to={"/sound"} id="sound" className={`${MotionZoom}`}>
                                Sound
                            </Link>
                        </li>
                        <li>
                            <Link to={"/contact"} id="contact" className={`${MotionZoom}`}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to={"/about"} id="about" className={`${MotionZoom}`}>
                                Developers
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Link para User Login ou User Login Active */}
                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/lucas-pedrozo/TechAcademy5.git"
                        className="hidden min-[500px]:flex items-center gap-1.5 || px-5 py-2 rounded-full || font-semibold || shadow-[0_0_8px_rgba(22,186,203,0.4)] hover:shadow-[0_0_10px_rgba(22,186,203,1)] hover:scale-102 transition duration-300"
                        id="github"
                        style={{
                            backgroundColor: "#6900e2",
                            backgroundImage:
                                "linear-gradient(135deg, #6900e2 0%, #00e2bd 100%)",
                        }}
                    >
                        <img src={logoGit} alt="github" />
                        GitHub
                    </a>

                    {/* Verificação de Login */}
                    {isUserLogin ? <ButtonUserActive /> : <ButtonLogin />}

                    <div className="block min-[1000px]:hidden">
                        <MenuHeader />
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
