import { Button } from "./Button";

export const PricingCard = () => {
    return (
        <div className="flex h-[450px] w-[380px] flex-col items-center  justify-between rounded-badge border-2 border-black border-opacity-10 p-8">
            <div className="text-center">
                <p className=" font-semibold uppercase">Explorer</p>
                <div className="text-4xl font-bold">
                    $4,99 <span className="text-[#9CA3AF]">/mo</span>
                </div>
            </div>
            <div className="w-full">
                <p className="text-lg font-medium">Lorem, ipsum dolor.</p>
                <p className="text-lg font-medium">Lorem, ipsum dolor.</p>
                <p className="text-lg font-medium">Lorem, ipsum dolor.</p>
                <p className="text-lg font-medium">Lorem, ipsum dolor.</p>
                <p className="text-lg font-medium">Lorem, ipsum dolor.</p>
                <p className="text-lg font-medium">Lorem, ipsum dolor.</p>
            </div>
            <Button backgroundColor={"bg-cream"} color={"text-black"}>
                Get notified
            </Button>
        </div>
    );
};
