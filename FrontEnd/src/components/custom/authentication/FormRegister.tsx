import useHookRegister from "@/hook/authentication/hookRegister";
import InputPassword from "@/components/custom/global/InputPassword";
import GlobalButton from "@/components/custom/global/GlobalButton";
import AlertError from "@/components/custom/error/AlertError";
import Input from "@/components/custom/global/Input";

import { useEffect } from "react";
import Aos from "aos";


const FormRegister = () => {

    const { register, errors, handleSubmit, handleRegister, errorMessage, setErrorMessage } = useHookRegister();
    const errorStyle = "text-red-500 text-sm pl-5";

    useEffect(() => {
        Aos.init({ duration: 500, delay: 0 });
    }, [])

    return (
        <>
            {errorMessage && <AlertError message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <form className={`flex flex-col gap-4 w-full `} onSubmit={handleSubmit(handleRegister)}>
                <section className="flex flex-col gap-1">
                    <Input type="text" id="name" placeholder="Name" {...register.name} />
                    {errors.name && <span className={errorStyle} data-aos="fade">{errors.name.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <Input type="text" id="cpf" placeholder="CPF" maxLength={11} {...register.cpf} />
                    {errors.cpf && <span className={errorStyle} data-aos="fade">{errors.cpf.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <Input type="email" id="email" placeholder="Email" {...register.email} />
                    {errors.email && <span className={errorStyle} data-aos="fade">{errors.email.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword id="password" placeholder="Password" {...register.password} />
                    {errors.password && <span className={errorStyle} data-aos="fade">{errors.password.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword id="confirmPassword" placeholder="Confirm Password" {...register.confirmPassword} />
                    {errors.confirmPassword && <span id="teste" className={errorStyle} data-aos="fade">{errors.confirmPassword.message}</span>}
                </section>

                <GlobalButton children={"Register"} buttonPosition="justify-end" />
            </form>
        </>
    );
}

export default FormRegister;