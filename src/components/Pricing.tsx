import { Badge } from "./Badge";
import { PricingCard } from "./PricingCard";
import { firstCardText } from "@/utilities/cardText";
import { secondCardText } from "@/utilities/cardText";
import { thirdCardText } from "@/utilities/cardText";

export const Pricing = () => {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#F3F4F6]">
            <div className="flex w-full flex-col items-center justify-center text-center">
                <div>
                    <Badge>Pricing</Badge>
                </div>
                <h1 className="text-6xl font-semibold">
                    Start making <span className="text-[#8B5CF6]">smarter</span> decisions,
                    <p className="text-[#9CA3AF]">Choose a plan</p>
                </h1>
            </div>
            <div className="flex flex-col gap-5 md:flex-row">
                {/* <div></div>
                <div></div>
                <div></div> */}
                <PricingCard tag={"Explorer"} price={499} buttonText={"text-black"} buttonBackground={"bg-cream"} cardText={firstCardText} />
                <PricingCard tag={"Innovator"} price={1999} buttonText={"text-white"} buttonBackground={"bg-purple-400"} cardText={secondCardText} />
                <PricingCard tag={"Visionary"} price={4999} buttonText={"text-black"} buttonBackground={"bg-cream"} cardText={thirdCardText} />
            </div>
        </div>
    );
};
