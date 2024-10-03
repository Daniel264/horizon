import { ServicesTemplate } from "./ServicesTemplate";

export const Services = () => {
    return (
        <ServicesTemplate
            image={"assets/images/serviceone.svg"}
            title={"Uncover latest trends in real life"}
            text={"Stay ahead of the curve with our Dynamic Trend Analysis feature Horizon continuously monitors and analyzes trends in real time, providing you with instant insights into latest shifts in consumer behavior and interests."} useHeader={true} reverse={false}        />
    );
};
