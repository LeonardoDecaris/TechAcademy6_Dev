type PropsSearch = {
    inputValue: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSearch: (e: React.FormEvent) => void;
    icons: string;
}

const Search = ({ inputValue, onChange, handleSearch, icons }: PropsSearch) => {
    const SyInput = "bg-white/10 backdrop-blur-md rounded-full border-1 border-white || w-full text-white placeholder:text-white placeholder:font-medium focus:outline-none || px-5 py-2";
    return (
        <form onSubmit={handleSearch} className={`${SyInput} max-w-[700px] mx-auto flex justify-between gap-2`} >
            <input
                type="search"
                placeholder="search..."
                value={inputValue}
                className={`focus:outline-none w-full text-sm`}
                onChange={onChange}
                id="search"
            />
            <button type="submit">
                <img src={icons} className="w-7" alt="Buscar" />
            </button>
        </form>
    );
}

export default Search;