export type SelectProps = {
    options: { label: string, value: string }[],
    placeHolder: string;
}& React.SelectHTMLAttributes<HTMLSelectElement>