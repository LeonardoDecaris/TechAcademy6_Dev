import { useHookNewPassword } from "@/hook/authentication/hookNewPassword";
import InputPassword from "@/components/custom/global/InputPassword";
import GlobalButton from "@/components/custom/global/GlobalButton";
import AlertError from "@/components/custom/error/AlertError";

const FormNewPassword = () => {
    const { register, errors, handleSubmit, handleNewPassword, errorMessage, setErrorMessage } = useHookNewPassword();
    const errorStyle = "text-red-500 text-sm pl-5";

    return (
        <>
            {errorMessage && <AlertError message={errorMessage} onClose={() => setErrorMessage(null)} />}

            <form className={`flex flex-col gap-4 w-full `} onSubmit={handleSubmit(handleNewPassword)}>

                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Password" {...register.password} />
                    {errors.password && <span className={errorStyle}>{errors.password.message}</span>}
                </section>

                <section className="flex flex-col gap-1">
                    <InputPassword placeholder="Confirm Password" {...register.confirmPassword} />
                    {errors.confirmPassword && <span className={errorStyle}>{errors.confirmPassword.message}</span>}
                </section>

                <GlobalButton children={"New Pass"} buttonPosition="justify-end" />
            </form>
        </>
    );
}

export default FormNewPassword;