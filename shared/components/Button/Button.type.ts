export type ButtonProps = {
    children: React.ReactNode;
    buttonType: 'primary' | 'outline';
}& React.ButtonHTMLAttributes<HTMLButtonElement>