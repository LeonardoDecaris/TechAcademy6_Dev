import InputPassword from "@/components/custom/global/InputPassword";
import GlobalButton from "@/components/custom/global/GlobalButton";
import AlertError from "@/components/custom/error/AlertError";
import useHookLogin from "@/hook/authentication/hookLogin";
import Input from "@/components/custom/global/Input";

function FormLogin() {

    const { register, handleSubmit, errors, handleLogin, desabledLogin, errorMessage, setErrorMessage } = useHookLogin();
    const errorStyle = "text-red-500 text-sm pl-5";

    return (
        <>
            {errorMessage && <AlertError message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <form onSubmit={handleSubmit(handleLogin)} className={`flex flex-col gap-4 w-full`}>

                <section className="flex flex-col gap-1">
                    <Input type="email" id="email" placeholder="Email" {...register.email} />
                    {errors.email && <span className={errorStyle} data-aos="fade">{errors.email.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword id="password" placeholder="Password" {...register.password} />
                    {errors.password && <span className={errorStyle} data-aos="fade">{errors.password.message}</span>}
                </section>

                <GlobalButton children={"Login"} buttonPosition="justify-end" disabled={desabledLogin} />

            </form>
        </>
    );
}

export default FormLogin;