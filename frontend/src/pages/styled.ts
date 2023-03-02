import styled from 'styled-components';
import { ColorsFonts } from '../css/fonts/Color';

export const ContainerPage = styled.div`
    .container{
        width: 50%;
        margin: 100px;
        height: 1500px;
        border-radius: 20px;

        .screen-products{
            margin: 50px 0 5px;
        }

        .screen-products .products {
            margin: 10px 0;
            display: flex;
            width: 70%;
            overflow-y: scroll;

            .card-home {
                margin-right: 40px;
            }
        }
    }  
`;
