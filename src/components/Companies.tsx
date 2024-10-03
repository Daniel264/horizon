import { Logos } from "@/utilities/Companies";

import Image from "next/image";

export const Companies = () => {
    return (
        <section className="flex w-full justify-center">
            <div className="flex w-[75%] justify-between">
                {Logos.map((logo, index) => (
                    <div key={index} className="flex items-center justify-center">
                        <Image src={logo.logo} alt={logo.name} width={100} height={100} className="lg:h-32 h-20 w-20 lg:w-32 opacity-75" />
                    </div>
                ))}
            </div>
        </section>
    );
};
