import Image from "next/image";
import { Badge } from "./Badge";
import { BlogContent } from "@/utilities/blog";
import { Button } from "./Button";

export const Blog = () => {
    return (
        <section className="min-h-screen w-full items-center justify-center px-3 py-10 text-center md:px-10">
            <div className="w-full lg:w-[88%] mx-auto items-center flex flex-col h-full justify-center">
                <div className="pb-10 lg:pb-14 flex justify-between h-full w-full items-center">
                    <div>
                        <Badge>Blog</Badge>
                        <h1 className="text-left text-6xl font-semibold">Read, learn, improve</h1>
                    </div>
                    <Button backgroundColor={""} color={""} >All articles</Button>
                </div>
                <div className="flex flex-col lg:flex-row flex-wrap h-full w-full items-stretch justify-center gap-5">
                    {BlogContent.map((item) => (
                        <div key={item.title} className="flex w-[400px] h-full items-center justify-center mx-auto lg:mx-0 flex-col gap-3">
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
