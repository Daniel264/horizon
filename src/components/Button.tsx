interface ButtonProps {
    children: string;
    backgroundColor: string;
    color: string;
}

export const Button = ({ children, backgroundColor, color }: ButtonProps) => {
    return <button className={`rounded-xl px-4 py-3  ${backgroundColor}  ${color} `}>{children}</button>;
};
