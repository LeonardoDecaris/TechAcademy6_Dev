import useHookUpdateUser from "@/hook/authentication/hookUpdateUser";
import GlobalButton from "@/components/custom/global/GlobalButton";
import Input from "@/components/custom/global/Input";

import { useEffect } from "react";
import Aos from "aos";

const FormUpdateUser = () => {

    const { register, errors, handleUpdadeUser, handleSubmit } = useHookUpdateUser();
    const errorStyle = "text-red-500 text-sm pl-5";

    useEffect(() => {
        Aos.init({ duration: 400, delay: 0 });
    }, []);

    return (
        <form className="flex flex-col w-full" onSubmit={handleSubmit(handleUpdadeUser)}>

            <section className="flex flex-col gap-1">
                <Input type="text" id="name" placeholder="Username" {...register.name} />
                {errors.name && <span className={errorStyle} data-aos="fade">{errors.name.message}</span>}
            </section>

            <GlobalButton children={"Update"} buttonPosition="justify-end" />
        </form>
    );
};

export default FormUpdateUser;