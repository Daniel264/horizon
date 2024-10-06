import Image from "next/image";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { motion } from "framer-motion";

export const Recommendation = () => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center space-y-20 bg-[#F3F4F6] py-16">
            <header className="flex h-fit w-full flex-col items-center justify-center">
                <Badge>Customer Voices</Badge>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
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
                    className="px-5 text-5xl font-semibold md:px-0 md:text-6xl "
                >
                    Early adopters are saying
                </motion.h1>
            </header>
            <div className="grid w-[70%] grid-cols-1 gap-14 lg:grid-cols-2">
                <div className="space-y-5">
                    <div>
                        <Image src="/assets/images/recommendone.svg" width={100} height={100} alt="avatar" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
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
                    >
                        <p className="text-2xl font-medium">“We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we&apos;re always informed about critical market developments, giving us a competitive edge.”</p>
                    </motion.div>
                    <div className="space-y-5">
                        <div>
                            <Image src="/assets/images/intercom.svg" width={130} height={130} alt="intercom Company Logo" />
                        </div>
                        <div>
                            <p className="font-medium">Alex Rodriguez</p>
                            <p className="text-[#9CA3AF]">Marketing Director, Digital Ventures Inc.</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-5">
                    <div>
                        <Image src="/assets/images/recommendtwo.svg" width={100} height={100} alt="" />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
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
                    >
                        <p className="text-2xl font-medium">“We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we&apos;re always informed about critical market developments, giving us a competitive edge.”</p>
                    </motion.div>
                    <div className="space-y-5">
                        <div>
                            <Image src="/assets/images/abstract.svg" width={130} height={130} alt="Abstract Company Logo" />
                        </div>
                        <div>
                            <p className="font-medium">Sarah Thompson</p>
                            <p className="text-[#9CA3AF]">Marketing Director, Digital Ventures Inc.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex h-full w-full flex-col justify-center space-y-5">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
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
                            className="text-5xl font-semibold"
                        >
                            Benchmark <span className="text-[#8B5CF6]">against</span> the best companies
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.9,
                                    delay: 0.5,
                                    ease: [0.44, 0, 0, 1],
                                },
                            }}
                            viewport={{
                                amount: "some",
                                once: true,
                            }}
                            className="text-xl font-medium"
                        >
                            Elevate your competitive edge with our Competitor Benchmarking feature. Horizon benchmarks your performance against industry leaders, providing actionable insights to outperform your competition.
                        </motion.p>
                        <div className="w-fit">
                            <Button backgroundColor={"bg-[#9B72F7]"} color={"text-white"}>
                                Get early access
                            </Button>
                        </div>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: {
                            duration: 0.9,
                            delay: 0.5,
                            ease: [0.44, 0, 0, 1],
                        },
                    }}
                    viewport={{
                        amount: "some",
                        once: true,
                    }}
                >
                    <Image src="/assets/images/recommend-image.svg" width={100} height={100} alt="avatar" className="h-full w-full rounded-3xl" />
                </motion.div>
            </div>
        </section>
    );
};
