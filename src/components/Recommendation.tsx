import Image from "next/image";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const Recommendation = () => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center space-y-20 bg-[#F3F4F6] pt-10">
            <header className="flex h-fit w-full flex-col items-center justify-center">
                <Badge>Customer Voices</Badge>
                <h1 className="text-6xl font-semibold ">Early adopters are saying</h1>
            </header>
            <div className="grid w-[70%] grid-cols-1 gap-14 lg:grid-cols-2">
                <div className="space-y-5">
                    <div>
                        <Image src="/assets/images/recommendone.svg" width={100} height={100} alt="avatar" />
                    </div>
                    <div>
                        <p className="text-2xl font-light">“We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we&apos;re always informed about critical market developments, giving us a competitive edge.”</p>
                    </div>
                    <div className="space-y-5">
                        <div>
                            <Image src="/assets/images/intercom.svg" width={100} height={100} alt="intercom Company Logo" />
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
                    <div>
                        <p className="text-2xl font-light">“We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we&apos;re always informed about critical market developments, giving us a competitive edge.”</p>
                    </div>
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
                        <h1 className="text-5xl font-semibold">
                            Benchmark <span className="text-[#8B5CF6]">against</span> the best companies
                        </h1>

                        <p className="text-xl font-light">Elevate your competitive edge with our Competitor Benchmarking feature. Horizon benchmarks your performance against industry leaders, providing actionable insights to outperform your competition.</p>
                        <div className="w-fit">
                            <Button backgroundColor={"bg-[#9B72F7]"} color={"text-white"}>
                                Get early access
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Image src="/assets/images/recommend-image.svg" width={130} height={130} alt="avatar" className="h-full w-full" />
                </div>
            </div>
        </section>
    );
};
