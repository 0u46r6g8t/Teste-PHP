export interface IGlobalComponents extends ITypeButton {
    className?: string;
    id?: string;
    state?: any;
    setState?: any; 
    children?: JSX.Element | JSX.Element[] | string; 
}

export interface ITypeButton {
    typeColor?: string;
}

export interface IGlobalStyled {
    active?: boolean;
    color?: string;
    background?: string;
    width?: number;
    height?: number
    success?: string;
    error?: string;
}