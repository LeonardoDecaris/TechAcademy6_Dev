import FormNewPassword from "@/components/custom/authentication/FormNewPassword";

function NewPassword() {

    const MotionForm = "animate-fade-up animate-duration-500 animate-ease-out animate-normal"
    const MotionContainer = "animate-fade-up animate-duration-500 animate-ease-out animate-normal || shadow-[0_0_8px_rgba(0,0,0,0.6)]"

    return (
        <main className="min-h-[86vh] w-full flex justify-center items-center pt-10 px-2.5">
            <section className={`w-full max-w-[500px] h-110  mb-10 p-2.5 flex  items-center gap-2.5 bg-white/10 backdrop-blur-lg rounded-3xl border border-white || overflow-hidden || ${MotionContainer}`}>

                <div className={`w-full ${MotionForm} animate-delay-100 `}>
                    <h2 className="max-w-[400px] m-auto text-4xl font-bold text-center pb-12" style={{ letterSpacing: "10px" }}>NEW PASSWORD</h2>
                    <FormNewPassword />
                </div>

            </section>
        </main >
    );
}

export default NewPassword;