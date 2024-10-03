interface ButtonProps {
    children: string;
    backgroundColor: string;
    color: string;
}

export const Button = ({ children, backgroundColor, color }: ButtonProps) => {
    return <button className={`rounded-xl border-2 border-black border-opacity-10 px-4 py-3  ${backgroundColor}  ${color} `}>{children}</button>;
};
