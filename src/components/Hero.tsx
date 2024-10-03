import Image from "next/image";
import { Button } from "./Button";

export const Hero = () => {
    return (
        <div>
            <div>
                <h1>Insightful trends to discover real opportunities</h1>
                <p>Step into the new era of strategic decision making. Horizon empowers businesses in the marketing space with unparalleled data analytics.</p>
                <div>
                    <Button backgroundColor={"bg-white"} color={"text-[#F6F6F7]"}>
                        Discover more
                    </Button>
                    <Button backgroundColor={""} color={""}>
                        Get early access
                    </Button>
                </div>
            </div>
            <div>
                <Image src="/assets/images/hero-img.svg" alt={"Image showing transacrions"} width={1000} height={1000} />
            </div>
        </div>
    );
};
