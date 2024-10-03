import React from "react";
import { Button } from "./Button";

export const Header = () => {
    return (
        <div className="flex h-fit w-full items-center justify-between px-12 py-5">
            <div>
                <h1 className="text-2xl font-bold">Horizon</h1>
            </div>
            <div>
                <nav>
                    <ul className="flex  space-x-5 font-medium text-gray-700 hover:cursor-pointer sm:text-base lg:text-lg">
                        <li>Features</li>
                        <li>Use Case</li>
                        <li>Integration</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </div>
            <div>
                <Button backgroundColor={"bg-gradient-to-r from-[#9B72F7] to-[#8B5CF6]"} color={"text-white"}>
                    Get this Template
                </Button>
            </div>
        </div>
    );
};
