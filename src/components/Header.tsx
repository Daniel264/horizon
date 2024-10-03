import React from "react";

export const Header = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold">Horizon</h1>
            </div>
            <div>
                <nav>
                    <ul className="text-lg font-medium text-gray-500">
                        <li>Features</li>
                        <li>Use Case</li>
                        <li>Integration</li>
                        <li>Pricing</li>
                        <li>Blog</li>
                    </ul>
                </nav>
            </div>
            <div></div>
        </div>
    );
};
