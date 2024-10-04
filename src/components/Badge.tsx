interface BadgeProps {
    children: string;
}

export const Badge = ({ children }: BadgeProps) => {
    return <div className="flex w-fit items-center justify-center rounded bg-[#EDE9FE] px-3 py-2 text-xs uppercase  text-[#8B5CF6]">{children}</div>;
};
