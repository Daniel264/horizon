import Image from "next/image";
import { Badge } from "./Badge";
import { BlogContent } from "@/utilities/blog";
import { Button } from "./Button";

export const Blog = () => {
    return (
        <section className="min-h-screen w-full items-center justify-center px-3 py-10 text-center md:px-10">
            <div className="mx-auto flex h-full w-full flex-col items-center justify-center lg:w-[88%]">
                <div className="flex h-full w-full flex-col items-center justify-between space-y-5 pb-10 md:flex-row lg:pb-14">
                    <div>
                        <Badge>Blog</Badge>
                        <h1 className="text-left text-6xl font-semibold">Read, learn, improve</h1>
                    </div>
                    <Button backgroundColor={""} color={""}>
                        All articles
                    </Button>
                </div>
                <div className="flex h-full w-full flex-col flex-wrap items-stretch justify-center gap-5 lg:flex-row">
                    {BlogContent.map((item) => (
                        <div key={item.title} className="mx-auto flex h-full w-[400px] flex-col items-center justify-center gap-3 lg:mx-0">
                            <Image src={item.src} alt={item.alt} width={400} className="h-[300px] w-[400px]" height={400} />
                            <div>
                                <Badge>{item.badge}</Badge>
                                <h2 className="text-xl font-bold">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// <Image src="/assets/images/blog-one.svg" alt="blog image" width={500} height={500} />
