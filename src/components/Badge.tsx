interface BadgeProps {
    children: string;
}

export const Badge = ({ children }: BadgeProps) => {
    return (
        <div className="flex w-fit items-center justify-center rounded bg-[#EDE9FE] px-3 py-2 text-xs uppercase gap-2 text-[#8B5CF6]">
            <div className="h-2 w-2 rounded-full bg-[#8B5CFC] "></div>
            {children}
        </div>
    );
};
