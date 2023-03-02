import styled from "styled-components";
import { IGlobalStyled } from "../../interface/IGlobal";
import { ColorsFonts } from "./Color";

export const H1 = styled.h1<IGlobalStyled>`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size:26px;
    color: ${props => props.color || ColorsFonts.primary};
`;

export const H2 = styled.h2<IGlobalStyled>`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: ${props => props.color || ColorsFonts.primary};
`;

export const H3 = styled.h2<IGlobalStyled>`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 22px;
    color: ${props => props.color || ColorsFonts.primary};
`;

export const H4 = styled.h2<IGlobalStyled>`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    color: ${props => props.color || ColorsFonts.primary};
`;

export const H5 = styled.h2<IGlobalStyled>`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    color: ${props => props.color || ColorsFonts.primary};
`;

export const Paragraph = styled.p<IGlobalStyled>`
    font-family: 'Roboto', sans-serif;
    align-items: center;
    font-weight: 200;
    font-size: 18px;
    color: ${props => props.color || ColorsFonts.primary};
`
