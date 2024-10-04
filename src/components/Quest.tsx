import { Badge } from "./Badge";

export const Quest = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#F9FAFB]">
            <div className="flex  text-center flex-col justify-center">
                <div className="w-full flex justify-center">
                    <Badge>Features</Badge>
                </div>
                <h1 className="text-6xl font-semibold">
                    Essentially our quest<span className="text-[#9CA3AF] block">here at horizon</span>
                </h1>
            </div>
        </div>
    );
};
