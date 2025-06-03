import { ButtonClose, ButtonDown } from "@/components/custom/global/GlobalButton";
import FormUpdateUser from "@/components/custom/authentication/FormUpdateUser";
import useHookGetUser from "@/hook/authentication/hookGetUser";
import Loading from "@/components/custom/global/Loading";
import Logouser from "@/assets/image/lucas.jpg";
import { useNavigate } from "react-router-dom";
import AlertLogout from "@/components/custom/error/Alertlogout";
import AlertDelete from "@/components/custom/error/AlertDetele";

function UserSettings() {
    const { userAtributes, loading } = useHookGetUser();
    const styleContainerLogo = "bg-black/10 border-1 border-white/50 backdrop-blur-sm rounded-[12px] min-[500px]:flex gap-2 p-1.5";
    const motion = "animate-fade-up animate-duration-500 animate-ease-out animate-normal";
    const styleLogo = "w-18 rounded-[6px] mx-auto min-[500px]:mx-0";
    const navigate = useNavigate();

    return (
        <main className="min-h-[80vh] max-w-[600px] mx-auto flex justify-center items-center px-2.5 ">
            <section className={`w-full bg-white/10 border-1 border-white backdrop-blur-sm rounded-xl p-2.5 ${motion}`}>

                <div className={styleContainerLogo}>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            <img src={Logouser} alt="pedrozo" className={`${styleLogo}`} />
                            <div className="flex flex-col pt-1 text-center min-[500px]:text-left">
                                <span className="text-sm">Name: {userAtributes?.name}</span>
                                <span className="text-sm">Email: {userAtributes?.email}</span>
                                <span className="text-sm">CPF: {userAtributes?.cpf}</span>
                            </div>
                        </>
                    )}
                </div>

                <div className="pt-5 pb-2.5">
                    <FormUpdateUser />
                </div>

                <section className="flex justify-center flex-col min-[500px]:flex-row py-2.5">
                    <AlertLogout>
                        <ButtonClose children={'LogOut'} buttonPosition="justify-end min-[500px]:justify-center" />
                    </AlertLogout>

                    <AlertDelete>
                        <ButtonClose children={'Delete account'} buttonPosition="justify-end min-[500px]:justify-center" />
                    </AlertDelete>
                    <ButtonDown children={'New password'} buttonPosition="justify-end min-[500px]:justify-center" onClick={() => { navigate('/newPassword'); }} />
                </section>
            </section>
        </main>
    );
}

export default UserSettings;