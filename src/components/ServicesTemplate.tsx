import Image from "next/image";
import { Badge } from "./Badge";
import { motion } from "framer-motion";

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
    const parentVariants = {
        initial: {},
        WhileInView: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const childVariants = {
        initial: { opacity: 0, y: 50 },
        WhileInView: { opacity: 1, y: 0 },
        viewport: {
            amount: "some",
            once: true,
        },
    };
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center pt-16">
            {useHeader && (
                <header className="w-[80%] text-center text-4xl font-semibold sm:text-5xl lg:text-6xl">
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.9,
                                delay: 0.3,
                                ease: [0.44, 0, 0, 1],
                            },
                        }}
                        viewport={{
                            amount: "some",
                            once: true,
                        }}
                    >
                        Trend detection applied
                    </motion.h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,

                            transition: {
                                duration: 0.9,
                                delay: 0.6,
                                ease: [0.44, 0, 0, 1],
                            },
                        }}
                        viewport={{
                            amount: "some",
                            once: true,
                        }}
                        className="text-[#9CA3AF]"
                    >
                        to the whole market
                    </motion.p>
                    <div className="flex w-full justify-center">
                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.9,
                                    delay: 0.6,
                                    ease: [0.44, 0, 0, 1],
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                            className="flex justify-center pb-5 pt-5 text-center  text-sm font-medium text-[#374151] sm:text-base md:pb-0 lg:w-[60%]"
                        >
                            Unlock the full potential of your tech stack with Horizon&apos;s intuitive and flexible integration options. Experience the synergy of your favorite tools working seamlessly together, all powered by Horizon&apos;s cutting-edge AI analytics
                        </motion.p>
                    </div>
                </header>
            )}
            <div className={`flex min-h-screen w-full  flex-col items-center justify-center gap-10 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.44, 0, 0, 1],
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                    className="flex w-full justify-center"
                >
                    <Image src={image} alt={""} width={1000} className="h-full w-[70%] lg:h-[85%] lg:w-[85%]" height={1000} />
                </motion.div>
                <motion.section variants={parentVariants} className="flex w-full flex-col ">
                    <div className="flex w-[40%] justify-center pb-5">
                        <Badge>Features</Badge>
                    </div>
                    <div className="flex w-full flex-col items-center space-y-6 px-5 sm:px-24">
                        <motion.h1 initial={childVariants.initial} whileInView={childVariants.WhileInView} viewport={{ amount: "some", once: true }} className="text-5xl font-semibold" dangerouslySetInnerHTML={{ __html: title }} />

                        <motion.p initial={childVariants.initial} whileInView={childVariants.WhileInView} viewport={{ amount: "all", once: true }} className="text-base font-medium text-[#374151]">
                            {text}
                        </motion.p>
                        {lowerContent && (
                            <div className="flex flex-col md:flex-row">
                                <div className="space-y-4">
                                    <div className="w-fit rounded-2xl bg-[#EDE9FE] px-2 py-2">
                                        <Image src="/assets/images/section-icon.svg" alt="" width={100} height={100} className="h-8 w-8" />
                                    </div>
                                    <motion.h1 initial={childVariants.initial} whileInView={childVariants.WhileInView} viewport={{ amount: "some", once: true }} className="text-2xl font-semibold">
                                        {lowerContentTitleOne}
                                    </motion.h1>
                                    <motion.p initial={childVariants.initial} whileInView={childVariants.WhileInView} viewport={{ amount: "some", once: true }} className="text-sm font-medium text-[#374151]">
                                        {lowerContentTextOne}
                                    </motion.p>
                                    <div className="flex h-fit w-fit flex-row items-center justify-center">
                                        <p className="pr-2">Learn more</p>
                                        <Image src="/assets/images/arrow.svg" alt="" width={100} height={100} className="h-4 w-4" />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="w-fit rounded-2xl bg-[#DBEAFE] px-2 py-2">
                                        <Image src="/assets/images/section-icon.svg" alt="" width={100} height={100} className="h-8 w-8" />
                                    </div>
                                    <motion.h1 initial={childVariants.initial} whileInView={childVariants.WhileInView} viewport={{ amount: "some", once: true }} className="text-2xl font-semibold">
                                        {lowerContentTitleTwo}
                                    </motion.h1>

                                    <motion.p initial={childVariants.initial} whileInView={childVariants.WhileInView} viewport={{ amount: "some", once: true }} className="text-sm font-medium text-[#374151]">
                                        {lowerContentTextTwo}
                                    </motion.p>
                                    <div className="flex h-fit w-fit flex-row items-center justify-center">
                                        <p className="pr-2">Learn more</p>
                                        <Image src="/assets/images/arrow.svg" alt="" width={100} height={100} className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div></div>
                </motion.section>
            </div>
        </div>
    );
};
