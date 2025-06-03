import AlertDeleteAuthor from "../error/AlertDeleteAuthor";
import { ButtonClose, ButtonDown } from "../global/GlobalButton";
import AlertUpdateAthor from "../sound/AlertUpdateAthor";

type Props = {
    Name: string;
    idAuthor: number;
    authorName?: string;
}

const BlocoAuthor = ({ Name, idAuthor }: Props) => {

    const styleAuthor = "flex flex-col gap-1.5 bg-white/20 backdrop-blur-xl rounded-[10px] border-1 border-white font-bold text-white p-2.5 || max-w-[300px]";
    return (
        <div className={`${styleAuthor} `} data-aos="fade-up">
            <span className="font-medium" >Name: {Name}</span>
                <div className="flex justify-between items-center">
                    <AlertDeleteAuthor idAuthor={idAuthor} authorName={Name} >
                        <ButtonClose children="Delete" id={Name}/>
                    </AlertDeleteAuthor>

                    <AlertUpdateAthor idAuthor={idAuthor} authorName={Name}>
                        <ButtonDown children="Update" id={Name}/>

                        {/* <ButtonDown  id={Name}>
                            <span>
                                Update
                            </span>
                        </ButtonDown> */}

                    </AlertUpdateAthor>
                </div>
        </div>
    );
};

export default BlocoAuthor;