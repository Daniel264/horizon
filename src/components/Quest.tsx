import { QuestContent } from "@/utilities/quest";
import { Badge } from "./Badge";
import Image from "next/image";

export const Quest = () => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center space-y-10 bg-[#F9FAFB] py-10">
            <div className="flex  flex-col justify-center text-center">
                <div className="flex w-full justify-center">
                    <Badge>Features</Badge>
                </div>
                <h1 className="text-6xl font-semibold">
                    Essentially our quest<span className="block text-[#9CA3AF]">here at horizon</span>
                </h1>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex w-[80%] justify-center">
                    <div className="grid w-full lg:grid-cols-3 grid-rows-2 gap-9 ">
                        {QuestContent.map((content, index) => (
                            <div key={index} className="h-[320px]  rounded-badge border-2 border-gray-500 border-opacity-10 bg-[#ffffff] p-5">
                                <div className="flex justify-start">
                                    <Image src={content.src} alt="icon" width={70} height={70} />
                                </div>
                                <div className="flex h-[200px] flex-col justify-end w-[83%]  text-left space-y-4">
                                    <h1 className="text-2xl font-semibold">{content.title}</h1>
                                    <p className="text-[#374151] font-normal">{content.description}</p>
                                </div>
                            </div>
                        ))}
                       
                    </div>
                </div>
            </div>
        </section>
    );
};
