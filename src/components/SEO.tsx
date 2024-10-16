import Head from "next/head";
import { useRouter } from "next/router";

export interface SEOProp {
    icon?: string;
    title: string;
    keywords?: string;
    description?: string;
    image?: string;
}

export default function SEO({ icon, title, keywords, description, image }: SEOProp) {
    const router = useRouter();

    const SITE_BASE_URL = "https://horizon-amber-zeta.vercel.app";

    const DEFAULT_ICON_URL = "/assets/logo/horizon.svg";
    const DEFAULT_DESCRIPTION = "This is a website I built for Fintech Startups to showcase their innovative solutions tailored to meet the evolving needs of their clients.";

    const SEO = {
        icon: icon || DEFAULT_ICON_URL,
        title: title || "Next.js Boilerplate",
        keywords: keywords || "",
        description: description || DEFAULT_DESCRIPTION,
        image: SITE_BASE_URL + (image || "/assets/site-metaimage.png"),
        url: SITE_BASE_URL + router.pathname,
    };

    return (
        <Head>
            <title>{SEO.title}</title>

            <link rel="icon" href={SEO.icon} />
            <meta name="keywords" content={SEO.keywords} />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

            <meta name="title" content={SEO.title} />
            <meta name="description" content={SEO.description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={SEO.url} />
            <meta property="og:title" content={SEO.title} />
            <meta property="og:image" content={SEO.image} />
            <meta property="og:description" content={SEO.description} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={SEO.url} />
            <meta property="twitter:title" content={SEO.title} />
            <meta property="twitter:image" content={SEO.image} />
            <meta property="twitter:description" content={SEO.description} />
        </Head>
    );
}
