interface ButtonProps {
    children: string;
    backgroundColor: string;
    color: string;
}

export const Button = ({ children, backgroundColor, color }: ButtonProps) => {
    return (
        <button
            className={`btn-shadow group relative flex h-[45px] w-fit items-center justify-center overflow-hidden rounded-xl px-3 ${backgroundColor} text-sm ${color} font-normal leading-[24px] outline outline-[1px] -outline-offset-[0px] outline-black/[55%] transition-all hover:outline-[3px] hover:-outline-offset-1 hover:outline-purple-400/[100%] md:h-[48px] xl:w-[154px] xl:text-[14px] rounded-xl`}
        >
            <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-xl bg-white transition-all duration-300 group-hover:h-[52px]" /> 
            <span className="z-[11] group-hover:text-black">{children}</span>
        </button>
    );
};
