import AlertDeleteCategory from "../error/AlertDeleteCategory";
import { ButtonClose, ButtonDown } from "../global/GlobalButton";

import AlertUpdateCategory from "../sound/AlertUpdateCategory";

type Props = {
    Name: string;
    idcategory: number;
    categoryName?: string;
}

const BlocoCategory = ({ Name, idcategory }: Props) => {

    const styleAuthor = "flex flex-col gap-1.5 bg-white/20 backdrop-blur-xl rounded-[10px] border-1 border-white font-bold text-white p-2.5 || max-w-[300px]";
    return (
        <div className={`${styleAuthor} `} data-aos="fade-up">
            <span className="font-medium" >Name: {Name}</span>
                <div className="flex justify-between items-center">
                    <AlertDeleteCategory IdAuthor={idcategory!} categoryName={Name}>
                        <ButtonClose children="Delete" id={Name}/>
                    </AlertDeleteCategory>

                    <AlertUpdateCategory idCategory={idcategory!} categoryName={Name} >
                        <ButtonDown children="Update" id={Name}/>
                    </AlertUpdateCategory>
                </div>
        </div>
    );
};

export default BlocoCategory;