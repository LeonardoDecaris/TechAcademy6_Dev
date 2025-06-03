import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export type OptionType = {
    id: number;
    name: string;
};

type SelectProps = {
    placeholder?: string;
    options?: OptionType[];
    selectedValue?: number;
    onChange?: (value: string) => void;
};

const ComponentSelect = ({ placeholder, options, selectedValue, onChange }: SelectProps) => {
    const styleInput =
        "w-full bg-white/20 backdrop-blur-xl rounded-full border border-white text-white py-5 px-5 placeholder:text-white placeholder:font-medium focus:outline-none";
    return (
        <Select
            value={selectedValue ? String(selectedValue) : "0"}
            onValueChange={onChange}
        >
            <SelectTrigger className={styleInput}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>{placeholder}</SelectLabel>
                    <SelectItem key={0} value="0">
                        Nenhum
                    </SelectItem>
                    {options?.map((option) => (
                        <SelectItem key={option.id} value={String(option.id)}>
                            {option.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
};

export default ComponentSelect;


