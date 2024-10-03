import React from "react";
import { ServicesTemplate } from "./ServicesTemplate";

export const Services = () => {
    return (
        <>
            <ServicesTemplate
                image={"assets/images/serviceone.svg"}
                title={"Uncover latest trends in real life"}
                text={"Stay ahead of the curve with our Dynamic Trend Analysis feature Horizon continuously monitors and analyzes trends in real time, providing you with instant insights into latest shifts in consumer behavior and interests."}
                useHeader={true}
                reverse={false}
            />
            <ServicesTemplate
                image={"assets/images/servicetwo.svg"}
                title={"Tailor-made insights, just for you"}
                text={"Empower your decision-makers with personalized insights. Our Customizable Insights Dashboards allow you to curate the data that matters most to your business."}
                useHeader={false}
                reverse={true}
            />
            <ServicesTemplate
                image={"/assets/images/sectionthree.svg"}
                title={"Stay informed, instantly"}
                text={"Our smart Alert System keeps you in the know. Receive instant notifications on critical shifts in market dynamics, competitor moves, or emerging trends."}
                useHeader={false}
                reverse={false}
            />
        </>
    );
};
