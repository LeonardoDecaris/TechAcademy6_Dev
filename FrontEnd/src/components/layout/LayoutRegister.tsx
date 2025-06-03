import React, { useEffect } from "react";
import spriner from "@/assets/image/Radial Glass@1-1920x945 (1).webp"

type LayoutProps = {
    children: React.ReactNode;
    backgroundImage: string; // Caminho da imagem recebido pelas rotas
};


const LayoutRegister: React.FC<LayoutProps> = ({ children, backgroundImage }) => {
    useEffect(() => {

        document.body.style.margin = "0";
        document.body.style.padding = "0";
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.body.style.width = "100%";

        document.body.style.backgroundImage = `url('${backgroundImage}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";

        document.documentElement.style.margin = "0";
        document.documentElement.style.padding = "0";
        document.documentElement.style.height = "100%";
        document.documentElement.style.width = "100%";


        return () => {
            document.body.style.overflow = "";
            document.body.style.backgroundImage = "";
        };
    }, [backgroundImage]);

    return (
        <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* Imagem adicional com animação de fade */}
            <img
                src={spriner}
                alt="Background"
                style={{
                    position: "absolute",
                    top: -200,
                    left: 0,
                    width: "170%",
                    height: "170%",
                    objectFit: "cover",
                    zIndex: -1,
                    opacity: 0,
                    animation: "fadeIn 800ms ease-out forwards",
                    userSelect: "none",
                    pointerEvents: "none",
                }}
            />

            {/* Conteúdo principal */}
            <div style={{ position: "relative", zIndex: 1 }}>
                {children}
            </div>

            {/* Estilos para a animação */}
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                            transform: translateY(30px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default LayoutRegister;
