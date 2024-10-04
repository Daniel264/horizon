import React from "react";
import { Badge } from "./Badge";
import Image from "next/image";

export const Tools = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full items-center justify-center px-5 py-10 gap-5 lg:gap-0">
            <div className="flex w-full flex-col items-center">
                <div className="flex w-[78%] flex-col items-center space-y-5">
                    <div>
                        <Badge>Integrations</Badge>
                    </div>
                    <div className="space-y-5">
                        <h1 className="text-6xl font-semibold">
                            Smart <span className="text-[#8B5CF6]">integrations</span> at your fingertips
                        </h1>
                        <p className="font-medium text-[#374151]">Our open API and robust integration framework ensures a smooth connection with the tools you rely on daily, creating a unified ecosystem for unparalleled efficiency.</p>
                    </div>
                </div>
            </div>
            <div className="flex h-full w-full flex-col lg:flex-row gap-3 items-center justify-center">
                <div className="flex flex-row gap-3 lg:flex-col">
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/notion.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">Notion</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/loom.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>{" "}
                        <p className="text-xl font-semibold">Loom</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                    <div className="flex  h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/things.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">Things</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3 lg:flex-col">
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={""} alt={""} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">Confluence</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/mailchimp.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">Mail Chimp</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/github.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">GitHub</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                </div>
                <div className="flex flex-row gap-3  lg:flex-col">
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/codepen.svg"} alt={"Notion logo"} width={40} height={40} className="" />
                        </div>
                        <p className="text-xl font-semibold">Codepen</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/intercom.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">Intercom</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                    <div className="flex h-[200px] w-[200px] flex-col  rounded-badge border-2 border-black border-opacity-10 p-5 text-left">
                        <div className="h-full w-full">
                            <Image src={"/assets/logo/slack.svg"} alt={"Notion logo"} width={40} height={40} />
                        </div>
                        <p className="text-xl font-semibold">Slack</p>
                        <p className="font-medium text-[#4B5563]">Plan your life</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
