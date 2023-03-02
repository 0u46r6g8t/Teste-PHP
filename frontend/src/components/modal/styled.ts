import styled from "styled-components";
import { ColorsFonts } from "../../css/fonts/Color";
import { IGlobalStyled } from "../../interface/IGlobal";

export const ContainerModal = styled.div<IGlobalStyled>`
    visibility: ${props => props.active ? `visible` : "hidden"};
    position: fixed;
    width: 400px;
    top: 150px;
    right: 100px;
    border-radius: 12px;
    height: 450px;
    background: ${ColorsFonts.pureWhite};
    padding: 20px;
    display: flex;
    flex-direction: column;

    .header-car {
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 40px;
        border-bottom: 1px solid ${ColorsFonts.dark}
    }

    .info-car {
        margin: 10px 0 0;
        position: relative;
        height: 90%;

        .products-toCar {
            background-color: ${ColorsFonts.pureGray};
            border-radius: 4px;
            margin: 10px 3px;
            box-shadow: 0 0 4px 4px ${ColorsFonts.pureGray};
            display: flex;
            flex-direction: column;
            height: 210px;           
            max-height: 220px;
            padding: 4px;
            overflow-x: scroll;

            .product-toCar{
                display: flex;
                justify-content: space-between;
            }
        }

        .h4-info {
            margin: auto;
            position: absolute;
            flex-direction: column;
            align-items: center;
            bottom: 40px;
            border-top: 1px solid ${ColorsFonts.dark};
            
            .infos {
                display: flex;
                width: 100%;
                justify-content: space-between;

            }
        }
    }
`

export const ContainerRegisterProd = styled.div`
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`