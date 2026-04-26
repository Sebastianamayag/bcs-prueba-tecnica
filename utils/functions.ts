export const Capitalize = (word: string): string => {
    const wordLower = word.toLowerCase();
    return wordLower.charAt(0).toUpperCase() + wordLower.slice(1);
}

export const MinCharacthers = (minNumber: number): string => {
    return `Minino ${minNumber} caracteres`;
}


export const formatCurrency = (value: string): string => {
    if(!value) return value;
    return `$${Number(value).toLocaleString('es-CO')}`;
};