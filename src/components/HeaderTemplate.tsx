import React from "react";
import { Button } from "./Button";
import Image from "next/image";

interface HeaderTemplateProps {
    useHeader: boolean;
}

export const HeaderTemplate = ({ useHeader }: HeaderTemplateProps) => {
    return (
        <div className={` sticky top-0 z-50 flex h-fit w-full items-center justify-between bg-[#fff] px-3 py-5 md:px-12`}>
            <div className="flex -space-x-7 w-fit h-fit justify-center items-center">
                <Image src={"/assets/logo/horizon.svg"} alt={""} width={120} height={100} />
                <h1 className="text-2xl font-bold">Horizon</h1>
            </div>
            {useHeader ? (
                <div className="hidden lg:flex">
                    <nav>
                        <ul className="flex  space-x-5 font-medium text-gray-700 hover:cursor-pointer sm:text-base lg:text-lg">
                            <li>Features</li>
                            <li>Use Case</li>
                            <li>Integration</li>
                            <li>Pricing</li>
                            <li>Blog</li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className="hidden lg:flex">
                    Design by{" "}
                    <a className="px-2 text-gray-500 underline hover:text-black" href="https://twitter.com/AndreaMontini">
                        Andrea Montini
                    </a>{" "}
                    | Development by{" "}
                    <a className="px-2 text-gray-500 underline hover:text-black" href="https://x.com/DanielOlatinsu">
                        Daniel Olatinsu
                    </a>
                </div>
            )}
            <div>
                <Button backgroundColor={"bg-gradient-to-r from-[#9B72F7] to-[#8B5CF6]"} color={"text-white"}>
                    Get this Template
                </Button>
            </div>
        </div>
    );
};
