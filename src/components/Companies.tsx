import { Logos } from "@/utilities/Companies";
import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import useMeasure from "react-use-measure";

export const Companies = () => {
    let [ref, { width }] = useMeasure();
    const xTranslation = useMotionValue(0);

    useEffect(() => {
        if (width === 0) return;

        const finalPosition = -width / 2;
        const controls = animate(xTranslation, finalPosition, {
            ease: "linear",
            duration: 10,
            repeat: Infinity,
            repeatType: "loop",
        });

        return () => controls.stop();
    }, [width, xTranslation]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.44, 0, 0.56, 1],
                },
            }}
            viewport={{
                amount: "some",
                once: true,
            }}
            className="flex w-full justify-center overflow-hidden"
        >
            <motion.div ref={ref} className="flex w-[200%] gap-20" style={{ x: xTranslation }}>
                {[...Logos, ...Logos].map((logo, index) => (
                    <div key={index} className="flex w-[600px] items-center">
                        <Image src={logo.logo} alt={logo.name} width={100} height={100} className="h-50 w-[500px] opacity-75 lg:h-32 lg:w-32" />
                    </div>
                ))}
            </motion.div>
        </motion.section>
    );
};
