import styled from "styled-components";
import { ColorsFonts } from "../../css/fonts/Color";
import { IGlobalStyled } from "../../interface/IGlobal";

export const ButtonStyled = styled.button<IGlobalStyled>`
    background-color: ${props => props.color || ColorsFonts.primary};
    color: ${ColorsFonts.pureWhite};
    padding: 10px;
    border: 0;
    border-radius: 20px;
    transition: ease-in-out .2s;

    &:hover, &:active{
        transform: scale(1.04);
        cursor: pointer;
    }
`