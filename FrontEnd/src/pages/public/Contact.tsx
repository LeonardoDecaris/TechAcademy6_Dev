import GlobalButton from "@/components/custom/global/GlobalButton";
import Input from "@/components/custom/global/Input";

import { useEffect } from 'react';
import AOS from "aos";

function Contact() {

    useEffect(() => {
        AOS.init({ duration: 500, delay: 0 });
    }, [])

    return (
        <main className="py-14 px-2.5">
            <section className="max-w-[700px] mx-auto p-2.5 flex flex-col gap-2.5 bg-white/10 backdrop-blur-sm rounded-3xl border border-white overflow-hidden" data-aos="fade-up">
                <h2 className="text-4xl font-bold text-center pb-2.5" data-aos="fade-up" data-aos-delay="100">CONTACT</h2>
                <form className="flex flex-col gap-4 w-full" data-aos="fade-up" data-aos-delay="100" >
                    <Input placeholder="Name" id="name" className="w-full" title="Your Name" />
                    <Input placeholder="Email" id="email" className="w-full" title="Your Email" />
                    <textarea name="message" placeholder="Escreva sua mensagem" className="bg-white/20 min-h-[300px] border-1 border-white rounded-2xl text-white p-2 placeholder:text-white"></textarea>
                    <GlobalButton children={'Next'} buttonPosition="justify-end" />
                </form>
            </section>
        </main>
    );
}

export default Contact;