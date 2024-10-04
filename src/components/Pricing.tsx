import { Badge } from "./Badge";

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
            <div></div>
        </div>
    );
};
