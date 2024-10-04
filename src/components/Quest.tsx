import { Badge } from "./Badge";

export const Quest = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#F9FAFB]">
            <div className="flex  flex-col justify-center text-center">
                <div className="flex w-full justify-center">
                    <Badge>Features</Badge>
                </div>
                <h1 className="text-6xl font-semibold">
                    Essentially our quest<span className="block text-[#9CA3AF]">here at horizon</span>
                </h1>
            </div>
            <div>
                <div className="grid w-[80%] grid-cols-3 grid-rows-2">
                    {/* <div><h2>Trend Detection</h2></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div> */}
                </div>
            </div>
        </div>
    );
};
