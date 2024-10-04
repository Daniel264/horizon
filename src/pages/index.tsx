import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Quest } from "@/components/Quest";
import { Recommendation } from "@/components/Recommendation";
import SEO from "@/components/SEO";
import { Services } from "@/components/Services";
import { ServicesTemplate } from "@/components/ServicesTemplate";
import { Tools } from "@/components/Tools";
import React from "react";

export default function Home() {
    return (
        <div className="">
            <SEO title="Home" />

             <main className="flex min-h-screen flex-col items-center "> 
            {/* <div className="m-auto w-full max-w-8xl"> */}
            {/* 
                <div className="max-w-8xl m-auto">
                
                    <h3 className="my-5 text-5xl font-semibold">Home</h3>
                </div>
            */}
            <Header />
            <Hero />
            {/* <ServicesTemplate /> */}
            <Services />
            <Recommendation />
            <Quest />
            <Tools />   
            </main> 
        </div>
    );
}
