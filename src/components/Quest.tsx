import { QuestContent } from "@/utilities/quest";
import { Badge } from "./Badge";

export const Quest = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-10 bg-[#F9FAFB]">
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
                    <div className="grid w-full grid-cols-3 grid-rows-2 gap-9 ">
                        {QuestContent.map((content, index) => (
                            <div key={index} className="h-[300px] border-2 border-gray-500 border-opacity-10 bg-[#ffffff]">
                                <div className="flex justify-center">
                                    <img src={content.src} alt="icon" />
                                </div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold">{content.title}</h1>
                                    <p className="text-[#9CA3AF]">{content.description}</p>
                                </div>
                            </div>
                        ))}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
