import Image from "next/image";
import { Button } from "./Button";
import { Companies } from "./Companies";

export const Hero = () => {
    return (
        <div style={{ backgroundImage: "url('/assets/images/background.svg')" }}>
            <div className="flex min-h-screen w-full flex-col items-center justify-center pt-12 lg:flex-row ">
                <div className="flex w-full flex-col items-center space-y-7 text-left">
                    <h1 className="text-7xl font-semibold text-[#8B5CF6] ">
                        Insightful trends <br />
                        <span className="text-black">
                            to discover real <br /> opportunities
                        </span>
                    </h1>
                    <div className="px-28 text-xl font-medium text-[#374151]">
                        <p>Step into the new era of strategic decision making. Horizon empowers businesses in the marketing space with unparalleled data analytics.</p>
                    </div>
                    <div className="space-x-7">
                        <Button backgroundColor={"bg-[#FDFDFD]"} color={"text-black"}>
                            Discover more
                        </Button>
                        <Button backgroundColor={"bg-gradient-to-r from-[#9B72F7] to-[#8B5CF6]"} color={"text-white"}>
                            Get early access
                        </Button>
                    </div>
                </div>
                <div className="w-full ">
                    <Image src="/assets/images/hero-img.svg" alt={"Image showing transacrions"} width={1000} height={1000} />
                </div>
            </div>

            <Companies />
        </div>
    );
};
