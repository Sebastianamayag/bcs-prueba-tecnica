export type InputProps = {
    hasError: boolean;
    errorMessage: string;
    label: string;
    id: string;
}& React.InputHTMLAttributes<HTMLInputElement>