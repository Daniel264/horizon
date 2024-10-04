import { Badge } from "./Badge";
import { Button } from "./Button";

export const Recommendation = () => {
    return (
        <section className="flex min-h-screen w-full flex-col items-center justify-center space-y-20">
            <header>
                <Badge>Customer Voices</Badge>
                <h1 className="text-6xl font-semibold ">Early adopters are saying</h1>
            </header>
            <div className="grid w-[70%] grid-cols-1 gap-14 lg:grid-cols-2">
                <div>
                    <div>
                        <p className="text-xl font-light">We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we&apos;re always informed about critical market developments, giving us a competitive edge.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className="text-xl font-light">We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we&apos;re always informed about critical market developments, giving us a competitive edge.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className="text-5xl font-semibold">
                            Benchmark <span className="text-[#8B5CF6]">against</span> the best companies
                        </h1>

                        <p className="text-xl font-light">Elevate your competitive edge with our Competitor Benchmarking feature. Horizon benchmarks your performance against industry leaders, providing actionable insights to outperform your competition.</p>
                        <Button backgroundColor={"bg-[#9B72F7]"} color={"text-white"}>
                            Get early access
                        </Button>
                    </div>
                </div>
                <div></div>
            </div>
        </section>
    );
};
