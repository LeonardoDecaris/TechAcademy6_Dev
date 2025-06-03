const Loading = () => {
    return (
        <div className="w-full flex justify-center items-center flex-col gap-1.5 py-10">
            <div className="w-12 h-12 border-5 border-t-transparent border-white rounded-full animate-spin"></div>
            <span className="text-3xl">Loading...</span>
        </div>
    );
}

export default Loading;