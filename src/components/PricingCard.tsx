import { Button } from "./Button";
import Image from "next/image";

interface PricingCardProps {
    tag: string;
    price: number;
    buttonText: string;
    buttonBackground: string;
    cardText: { id: number; text: string }[];
}

export const PricingCard = ({ tag, price, buttonText, buttonBackground, cardText }: PricingCardProps) => {
    return (
        <div className="flex h-[450px] w-[380px]  flex-col items-center  justify-between rounded-badge border-2 border-gray-400 border-opacity-10 p-8 shadow">
            <div className="text-center">
                <p className=" font-semibold uppercase">{tag}</p>
                <div className="text-4xl font-bold">
                    ${price} <span className="text-[#9CA3AF]">/mo</span>
                </div>
            </div>
            <div className="w-full space-y-3">
                {cardText.map((item) => (
                    <div key={item.id} className="flex gap-3">
                        <Image src="/assets/images/card-arrow.svg" alt="check icon" width={23} height={23} />
                        <p className="text-lg font-medium">{item.text}</p>
                    </div>
                ))}
            </div>
            <Button backgroundColor={buttonBackground} color={buttonText}>
                Get notified
            </Button>
        </div>
    );
};
