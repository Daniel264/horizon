import Image from "next/image";

export const ServicesTemplate = () => {
    return (
        <div className="flex flex-col min-h-screen w-full items-center justify-center">
            <header className="text-6xl font-semibold ">
                <h1>Trend detection applied</h1>
                <p>to the whole market</p>
            </header>
            <div className="flex min-h-screen w-full  flex-col items-center justify-center gap-10 lg:flex-row">
                <div className="flex w-full justify-center">
                    <Image src={"assets/images/serviceone.svg"} alt={""} width={1000} className="h-full w-[70%] lg:h-[85%] lg:w-[85%]" height={1000} />
                </div>
                <section className="flex w-full flex-col items-center justify-center">
                    <div className="flex w-full flex-col items-center space-y-6 px-5 sm:px-24">
                        <h1 className="text-5xl font-semibold">
                            <span className=" text-[#8B5CF6]">Uncover</span> latest trends in real life
                        </h1>
                        <p className="text-xl font-medium">Stay ahead of the curve with our Dynamic Trend Analysis feature Horizon continuously monitors and analyzes trends in real time, providing you with instant insights into latest shifts in consumer behavior and interests. </p>
                    </div>
                    <div></div>
                </section>
            </div>
        </div>
    );
};
