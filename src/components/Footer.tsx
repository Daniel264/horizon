import Image from "next/image";
import { Badge } from "./Badge";
import { Button } from "./Button";

export const Footer = () => {
    return (
        <section className="w-full bg-[#F3F4F6] px-5 py-14 md:p-20">
            <footer className="flex min-h-screen w-full flex-col items-center justify-center space-y-10 rounded-2xl bg-white text-center">
                <div className="h-full w-full items-center justify-center space-y-8 text-center">
                    <div className="flex w-full justify-center">
                        <Badge>Ready?</Badge>
                    </div>
                    <h1 className="text-6xl font-semibold">
                        Detect your next <span className="text-[#8B5CF6]">big move</span>
                    </h1>
                    <p className="font-medium text-[#374151]">
                        Experience the synergy of your favorite tools working seamlessly <br /> together, all powered by Horizon&apos;s cutting-edge AI analytics.{" "}
                    </p>
                    <div className="flex items-center space-y-5 flex-col md:flex-row w-full justify-center space-x-5">
                        <input type="email" name="email" placeholder="yourmail@gmail.com" id="email" className="rounded-lg bg-[#E5E7EB] px-16 py-3" />
                        <Button backgroundColor={"bg-[#8B5CF6]"} color={"text-white"}>
                            Notify me
                        </Button>
                    </div>
                </div>
                <div>
                    <Image src={"/assets/images/footer-image.svg"} alt={"Image of Horizon's dashboard"} height={500} width={500} className="h-full w-full" />
                </div>
            </footer>
        </section>
    );
};
