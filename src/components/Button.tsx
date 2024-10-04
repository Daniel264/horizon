interface ButtonProps {
    children: string;
    backgroundColor: string;
    color: string;
}

export const Button = ({ children, backgroundColor, color }: ButtonProps) => {
    return (
        // <button
        //     className={`${backgroundColor} flex btn-shadow group relative  items-center justify-center overflow-hidden rounded-xl border-2 border-black border-opacity-10 px-4 py-3 text-sm font-medium leading-[24px]  ${color} outline outline-4 -outline-offset-[0px] outline-white/[55%] transition-all hover:outline-[5px] hover:-outline-offset-1 hover:outline-white/[100%] md:h-[48px] xl:w-[158px] xl:text-[18px]`}
        // >
        //     <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] bg-white transition-all duration-300 group-hover:h-[52px]" />
        //     <span className={`z-[1] group-hover:!text-black`}>{children}</span>
        // </button>
        <button
            className={`btn-shadow group relative flex  h-[45px] w-fit items-center justify-center overflow-hidden rounded-xl px-3 ${backgroundColor} text-sm ${color} font-normal leading-[24px]  outline outline-[1px] -outline-offset-[0px] outline-black/[55%] transition-all hover:outline-[3px] hover:-outline-offset-1 hover:outline-purple-400/[100%] md:h-[48px] xl:w-[154px] xl:text-[14px]`}
        >
            <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-xl bg-white transition-all duration-300 group-hover:h-[52px]" /> <span className="z-[11] group-hover:text-black">{children}</span>
        </button>
    );
};
