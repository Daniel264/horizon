import { Logos } from "@/utilities/Companies";

import Image from "next/image";

export const Companies = () => {
    return (
        <section>
            <div>
                {Logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image src={logo.logo} alt={logo.name} className="h-20 w-20" />
                    </div>
                ))}
            </div>
        </section>
    );
};
