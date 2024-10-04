import React from "react";
import { Badge } from "./Badge";

export const Tools = () => {
    return (
        <div className="flex min-h-screen w-full items-center justify-center">
            <div>
                <div>
                    <Badge>Integrations</Badge>
                </div>
                <div>
                    <h1 className="text-6xl font-semibold">
                        Smart <span className="text-[#8B5CF6]">integrations</span>
                        at your fingertips
                    </h1>
                    <p className="text-[#374151]">Our open API and robust integration framework ensures a smooth connection with the tools you rely on daily, creating a unified ecosystem for unparalleled efficiency.</p>
                </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};
