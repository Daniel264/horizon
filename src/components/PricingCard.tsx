import { Button } from "./Button";


interface PricingCardProps {
    tag: string;
    price: number;
    buttonText: string;
    buttonBackground: string;
    cardText: { id: number; text: string }[];
}

export const PricingCard = ({ tag, price, buttonText, buttonBackground, cardText }: PricingCardProps) => {
    return (
        <div className="flex h-[450px] w-[380px] flex-col items-center  justify-between rounded-badge border-2 border-black border-opacity-10 p-8">
            <div className="text-center">
                <p className=" font-semibold uppercase">{tag}</p>
                <div className="text-4xl font-bold">
                    ${price} <span className="text-[#9CA3AF]">/mo</span>
                </div>
            </div>
            <div className="w-full">
                {cardText.map((item) => (
                    <p key={item.id} className="text-lg font-medium">
                        {item.text}
                    </p>
                ))}
            </div>
            <Button backgroundColor={buttonBackground} color={buttonText}>
                Get notified
            </Button>
        </div>
    );
};
