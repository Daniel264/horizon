import React from "react";

const Tools = () => {
    return (
        <button className="btn-shadow group relative flex h-[38px] w-[110px] items-center justify-center overflow-hidden rounded-full bg-[#131316] text-sm font-medium leading-[24px] text-white outline outline-4 -outline-offset-[0px] outline-white/[55%] transition-all hover:outline-[5px] hover:-outline-offset-1 hover:outline-white/[100%] md:h-[48px] xl:w-[154px] xl:text-[18px]">
            <div className="absolute -bottom-[2px] -left-1 right-0 z-10 !mx-auto h-[0px] w-[160px] rounded-full bg-white transition-all duration-300 group-hover:h-[52px]" /> <span className="z-[11] group-hover:text-black">Get App</span>
        </button>
    );
};

export default Tools;
