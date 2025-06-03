import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import { ButtonDown } from "@/components/custom/global/GlobalButton";

import BannerAnuncio from "@/assets/videos/bannerAnuncio.mp4";
import motionBanner1 from "@/assets/videos/MotionBanner1.mp4";

import bgsection from "@/assets/image/HomeGit.webp";

import icons1 from "@/assets/icons/adobepremiere.png";
import icons2 from "@/assets/icons/adobeafter.png";
import icons3 from "@/assets/icons/adobephotoshop.png";
import icons4 from "@/assets/icons/adobefotos.png";
import icons5 from "@/assets/icons/figma.png";

function Home() {

    const MotionButton = 'hover:drop-shadow-[0_2px_6px_rgba(255,255,255,0.6)] // hover:scale-105 transition transform duration-300 ';
    const stylePlataform = 'flex flex-col min-[600px]:flex-row gap-5 // p-2.5 pb-5 bg-gradient-to-b from-white/10 to-black/0 border-t border-l border-r border-white/50 rounded-3xl shadow-[0px_-6px_6px_rgba(255,255,255,0.1)] ';
    const styleH3 = 'text-2xl font-bold text-center pb-14';
    const icons = 'w-20 hover:scale-105  ';
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
    }, [])


    return (
        <main>

            <section className="max-w-[1220px] px-2.5 pt-26 || min-[600px]:pt-40 mx-auto">
                <h1 className="text-3xl min-[600px]:text-6xl font-bold text-center || max-w-[800px] m-auto pb-16 || drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" data-aos="fade-up">
                    The Power of audioVisual Harmonic Sound
                </h1>

                <h4 className="text-2xl font-semibold text-center || pb-2.5" data-aos="fade-up">Find your Sound FX</h4>

                <div className="text-center pt-5" data-aos="fade-up">
                    <Link to={'/sound'} className={`${MotionButton} bg-white rounded-full px-5 py-2.5 || text-black font-semibold `}>
                        Search SoundFX
                    </Link>
                </div>

            </section>

            <section className="pt-30">
                <video src={BannerAnuncio} className="w-full" autoPlay loop muted data-aos="fade-up"></video>
            </section>

            <section className="relative py-20  min-[800px]:pt-40">

                <div className="absolute inset-0 -z-0"
                    style={{
                        backgroundImage: `url(${bgsection})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 0.5,
                    }}
                />

                <h3 className={`${styleH3}`} data-aos="fade-up">
                    Venha Conhecer a melhor Plataforma de SoundFX do Brasil
                </h3>

                <div className="relative z-10 max-w-[1220px] px-2.5 pb-20 mx-auto">
                    <div className={`${stylePlataform}`} data-aos="zoom-in-up">
                        <video src={motionBanner1} className="w-full max-w-[300px] mx-auto rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.6)]" autoPlay loop muted ></video>

                        <div className="p-2.5 min-[600px]:pt-10">
                            <h5 className="font-semibold text-2xl pl-2.5">Sound FX</h5>
                            <span >Temos um acervo de mais de 1000 soundFX, com uma qualidade de som incrível e com um preço acessível para todos os tipos de produtores, seja você um produtor iniciante ou um produtor profissional, temos o soundFX ideal para você.</span>
                            <ButtonDown buttonPosition="justify-end" onClick={() => navigate('/sound')}>SoundFX</ButtonDown>
                        </div>

                    </div>
                </div>

                <h3 className={`${styleH3}`} data-aos="fade-up">
                    Programas que mais utilizamos para edição de som
                </h3>

                <div className="flex justify-center flex-wrap gap-10 pb-20" >
                    <img src={icons1} className={`${icons}`} style={{ transition: 'all 0.3s ease-in-out' }} data-aos="zoom-in-up" />
                    <img src={icons2} className={`${icons}`} style={{ transition: 'all 0.3s ease-in-out' }} data-aos="zoom-in-up" />
                    <img src={icons3} className={`${icons}`} style={{ transition: 'all 0.3s ease-in-out' }} data-aos="zoom-in-up" />
                    <img src={icons4} className={`${icons}`} style={{ transition: 'all 0.3s ease-in-out' }} data-aos="zoom-in-up" />
                    <img src={icons5} className={`${icons}`} style={{ transition: 'all 0.3s ease-in-out' }} data-aos="zoom-in-up" />
                </div>
            </section>

        </main >
    );
}

export default Home;