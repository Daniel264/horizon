import Image from "next/image";
import { Badge } from "./Badge";
import { BlogContent } from "@/utilities/blog";

export const Blog = () => {
    <div className="min-h-screen w-full">
        <div>
            <Badge>Blog</Badge>
            <h1 className="text-6xl">Read, learn, improve</h1>
        </div>
        <div>
            {BlogContent.map((item) => (
                <div key={item.title} className="flex gap-3">
                    <Image src={item.src} alt={item.alt} width={500} height={500} />
                    <div>
                        <h2>{item.title}</h2>
                        <Badge>{item.badge}</Badge>
                    </div>
                </div>
            ))}
        </div>
    </div>;
};

// <Image src="/assets/images/blog-one.svg" alt="blog image" width={500} height={500} />
