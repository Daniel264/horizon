import React from "react";
import { Badge } from "./Badge";
import Image from "next/image";

export const Tools = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
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
            <div className="flex h-full w-full flex-row gap-10">
                <div className="flex flex-row space-y-10 lg:flex-col">
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/notion.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Notion</p>
                        <p>Plan your life</p>
                    </div>
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/loom.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Loom</p>
                        <p>Plan your life</p>
                    </div>
                    <div className="flex  h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/things.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Things</p>
                        <p>Plan your life</p>
                    </div>
                </div>
                <div className="flex flex-row space-y-10 lg:flex-col">
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/notion.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Confluence</p>
                        <p>Plan your life</p>
                    </div>
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/mailchimp.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Mail Chimp</p>
                        <p>Plan your life</p>
                    </div>
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/github.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">GitHub</p>
                        <p>Plan your life</p>
                    </div>
                </div>
                <div className="flex flex-row space-y-10 lg:flex-col">
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/codepen.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Codepen</p>
                        <p>Plan your life</p>
                    </div>
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/intercom.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Intercom</p>
                        <p>Plan your life</p>
                    </div>
                    <div className="flex h-[225px] w-[225px] flex-col items-center justify-center rounded-badge border-2 border-black border-opacity-10">
                        <Image src={"/assets/logo/slack.svg"} alt={"Notion logo"} width={100} height={100} />
                        <p className="text-xl font-medium">Slack</p>
                        <p>Plan your life</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
