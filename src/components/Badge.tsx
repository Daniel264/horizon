interface BadgeProps {
    children: string;
}

export const Badge = ({ children }: BadgeProps) => {
    return <div className="flex w-fit items-center justify-center rounded bg-[#EDE9FE] px-2 py-1 text-xs font-semibold text-[#8B5CF6]">{children}</div>;
};
