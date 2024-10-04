import React from "react";
import { Badge } from "./Badge";
import Image from "next/image";

export const Tools = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div className="w-full">
                <div>
                    <Badge>Integrations</Badge>
                </div>
                <div>
                    <h1 className="text-6xl font-semibold">
                        Smart <span className="text-[#8B5CF6]">integrations</span>
                        at your fingertips
                    </h1>
                    <p className="text-[#374151]">Our open API and robust integration framework ensures a smooth connection with the tools you rely on daily, creating a unified ecosystem for unparalleled efficiency.</p>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-row lg:flex-col">
                    <div className="flex h-full w-full flex-col items-center justify-center rounded-badge border-black border-opacity-10 shadow outline-2 outline-black">
                        <Image src={"/assets/logo/notion.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Notion</p>
                        <p>Plan your life</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
