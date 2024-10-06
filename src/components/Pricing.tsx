import { Badge } from "./Badge";
import { PricingCard } from "./PricingCard";
import { firstCardText } from "@/utilities/cardText";
import { secondCardText } from "@/utilities/cardText";
import { thirdCardText } from "@/utilities/cardText";
import Image from "next/image";

export const Pricing = () => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center gap-20 py-10 px-5 bg-[#F3F4F6] bg-[url('/assets/images/pricing-background.svg')] bg-left bg-no-repeat">
            <div className="flex w-full flex-col items-center justify-center text-center">
                <div>
                    <Badge>Pricing</Badge>
                </div>
                <h1 className="text-5xl md:text-6xl font-semibold">
                    Start making <span className="text-[#8B5CF6]">smarter</span> decisions,
                    <p className="text-[#9CA3AF]">Choose a plan</p>
                </h1>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                {/* <div></div>
                <div></div>
                <div></div> */}
                <PricingCard tag={"Explorer"} price={49} buttonText={"text-black"} buttonBackground={"bg-cream"} cardText={firstCardText} badge={false} />
                <PricingCard tag={"Innovator"} price={19} buttonText={"text-white"} buttonBackground={"bg-purple-400"} cardText={secondCardText} badge={true} tagColor="text-[#8B5CF6]"/>
                <PricingCard tag={"Visionary"} price={49} buttonText={"text-black"} buttonBackground={"bg-cream"} cardText={thirdCardText} badge={false} />
            </div>
            <div className="flex flex-row space-x-7 px-5 md:px-0 text-[#8B5CF6]">
                <div className="flex">
                    <Image src={"/assets/images/checkbox.svg"} alt={""} width={23} height={23} />
                    Free Trial
                </div>
                <div className="flex">
                    <Image src={"/assets/images/checkbox.svg"} alt={""} width={23} height={23} />
                    Cancel Anytime
                </div>
                <div className="flex">
                    <Image src={"/assets/images/checkbox.svg"} alt={""} width={23} height={23} />
                    Support Included
                </div>
            </div>
        </section>
    );
};
