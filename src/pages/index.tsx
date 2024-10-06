import { Blog } from "@/components/Blog";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { HeaderTemplate } from "@/components/HeaderTemplate";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Quest } from "@/components/Quest";
import { Recommendation } from "@/components/Recommendation";
import SEO from "@/components/SEO";
import { Services } from "@/components/Services";
import { ServicesTemplate } from "@/components/ServicesTemplate";
import { Tools } from "@/components/Tools";
import React from "react";
import SmoothScrolling from "@/components/SmoothScroll";

export default function Home() {
    return (
        <SmoothScrolling>
            <div className="">
                <SEO title="Horizon — Startup Landing Page" />

                <main className="flex min-h-screen w-full flex-col items-center bg-white text-black">
                    {/* <div className="m-auto w-full max-w-8xl"> */}
                    {/* 
                <div className="max-w-8xl m-auto">
                
                    <h3 className="my-5 text-5xl font-semibold">Home</h3>
                </div>
            */}
                    <HeaderTemplate useHeader={true} />
                    <Hero />
                    {/* <ServicesTemplate /> */}
                    <Services />
                    <Recommendation />
                    <Quest />
                    <Tools />
                    <Pricing />
                    <Blog />
                    {/* <Footer /> */}
                    <HeaderTemplate useHeader={false} />
                </main>
            </div>
        </SmoothScrolling>
    );
}
