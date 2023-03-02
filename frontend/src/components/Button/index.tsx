import { ColorsFonts } from "../../css/fonts/Color"
import { IGlobalComponents } from "../../interface/IGlobal"
import { ButtonStyled } from "./styled"

export const Button: React.FC<IGlobalComponents> = ({children, typeColor, setState}) => {
    return (
        <ButtonStyled onClick={() => setState()} color={typeColor}>{children}</ButtonStyled>
    )
}