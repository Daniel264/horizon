import Image from "next/image";
import { Badge } from "./Badge";

interface ServicesTemplateProps {
    image: string;
    title: string;
    text: string;
    useHeader: boolean;
    reverse: boolean;
    lowerContent: boolean;
    lowerContentTextOne?: string;
    lowerContentTitleOne?: string;
    lowerContentTextTwo?: string;
    lowerContentTitleTwo?: string;
}

export const ServicesTemplate = ({ image, title, text, useHeader, reverse, lowerContent, lowerContentTextOne, lowerContentTitleOne, lowerContentTextTwo, lowerContentTitleTwo }: ServicesTemplateProps) => {
    return (
        // <div className="flex min-h-screen w-full flex-col items-center justify-center pt-16">
        //     <header className="w-[80%] text-center text-6xl font-semibold">
        //         <h1>Trend detection applied</h1>
        //         <p className="text-[#9CA3AF]">to the whole market</p>
        //         <div className="flex w-full justify-center">
        //             <p className="flex justify-center pt-5 text-center text-base font-normal text-[#374151] lg:w-[60%]">
        //                 Unlock the full potential of your tech stack with Horizon&apos;s intuitive and flexible integration options. Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon&apos;s cutting-edge AI analytics
        //             </p>
        //         </div>
        //     </header>
        //     <div className="flex min-h-screen w-full  flex-col items-center justify-center gap-10 lg:flex-row">
        //         <div className="flex w-full justify-center">
        //             <Image src={"assets/images/serviceone.svg"} alt={""} width={1000} className="h-full w-[70%] lg:h-[85%] lg:w-[85%]" height={1000} />
        //         </div>
        //         <section className="flex w-full flex-col items-center justify-center">
        //             <div className="flex w-full flex-col items-center space-y-6 px-5 sm:px-24">
        //                 <h1 className="text-5xl font-semibold">
        //                     <span className=" text-[#8B5CF6]">Uncover</span> latest trends in real life
        //                 </h1>
        //                 <p className="text-base font-light">Stay ahead of the curve with our Dynamic Trend Analysis feature Horizon continuously monitors and analyzes trends in real time, providing you with instant insights into latest shifts in consumer behavior and interests. </p>
        //             </div>
        //             <div></div>
        //         </section>
        //     </div>
        // </div>
        <div className="flex min-h-screen w-full flex-col items-center justify-center pt-16">
            {useHeader && (
                <header className="w-[80%] text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
                    <h1>Trend detection applied</h1>
                    <p className="text-[#9CA3AF]">to the whole market</p>
                    <div className="flex w-full justify-center">
                        <p className="flex justify-center pb-5 pt-5 text-center  text-sm font-normal text-[#374151] sm:text-base md:pb-0 lg:w-[60%]">
                            Unlock the full potential of your tech stack with Horizon&apos;s intuitive and flexible integration options. Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon&apos;s cutting-edge AI analytics
                        </p>
                    </div>
                </header>
            )}
            <div className={`flex min-h-screen w-full  flex-col items-center justify-center gap-10 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <div className="flex w-full justify-center">
                    <Image src={image} alt={""} width={1000} className="h-full w-[70%] lg:h-[85%] lg:w-[85%]" height={1000} />
                </div>
                <section className="flex w-full flex-col ">
                    <div className="flex w-[40%] justify-center pb-5">
                        <Badge>Features</Badge>
                    </div>
                    <div className="flex w-full flex-col items-center space-y-6 px-5 sm:px-24">
                        <h1 className="text-5xl font-semibold" dangerouslySetInnerHTML={{ __html: title }} />

                        <p className="text-base font-medium text-[#374151]">{text} </p>
                        {lowerContent && (
                            <div className="flex flex-col md:flex-row">
                                <div className="space-y-4">
                                    <div className="w-fit rounded-2xl bg-[#EDE9FE] px-2 py-2">
                                        <Image src="/assets/images/section-icon.svg" alt="" width={100} height={100} className="h-8 w-8" />
                                    </div>
                                    <h1 className="text-2xl font-semibold">{lowerContentTitleOne}</h1>
                                    <p className="text-sm font-medium text-[#374151]">{lowerContentTextOne}</p>
                                    <div className="flex h-fit w-fit flex-row items-center justify-center">
                                        <p className="pr-2">Learn more</p>
                                        <Image src="/assets/images/arrow.svg" alt="" width={100} height={100} className="h-4 w-4" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-fit rounded-2xl bg-[#DBEAFE] px-2 py-2">
                                        <Image src="/assets/images/section-icon.svg" alt="" width={100} height={100} className="h-8 w-8" />
                                    </div>
                                    <h1 className="text-2xl font-semibold">{lowerContentTitleTwo}</h1>

                                    <p className="text-sm font-medium text-[#374151]">{lowerContentTextTwo}</p>
                                    <div className="flex h-fit w-fit flex-row items-center justify-center">
                                        <p className="pr-2">Learn more</p>
                                        <Image src="/assets/images/arrow.svg" alt="" width={100} height={100} className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div></div>
                </section>
            </div>
        </div>
    );
};
