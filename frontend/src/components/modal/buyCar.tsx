import { useEffect, useState } from "react"
import { useAppSelector } from "../../app/hooks"
import { ColorsFonts } from "../../css/fonts/Color"
import { Info } from "../../css/fonts/Div"
import { H1, H3, H4, H5, Paragraph } from "../../css/fonts/Title"
import { IGlobalComponents } from "../../interface/IGlobal"
import { Button } from "../Button"
import { ModalSale } from "./sale"
import { ContainerModal } from "./styled"

export const ByCarModal: React.FC<IGlobalComponents> = () => {
    const [openModal, setModal] = useState(false);
    const { car: { car: { listProducts, valueTotal, taxImpost }} } = useAppSelector(state => state);

    const handleOpenModal = () => {
        setModal(!openModal)
    }
    return (
        <ContainerModal active>
            <div className="header-car">            
                <H1>Carrinho de compras</H1>
                <H5>X</H5>
            </div>

            <div className="info-car">
                <H3 className="products">Produtos adicionados</H3>

                <div className="products-toCar">{listProducts.map(item => 
                    <div key={item.name} className="product-toCar">
                        <p>
                            {item.name} * {item.qnt}
                        </p>

                        <H5>{item.price}</H5>
                    </div>
                )}</div>

                <Info className="h4-info">
                    <div className="infos">
                        <H4 color={ColorsFonts.pureBlack}>Valor total: </H4>                   
                        <Paragraph color={ColorsFonts.pureBlack}>R$ {parseFloat(valueTotal).toFixed(2)}</Paragraph>
                    </div>

                    <div className="infos">
                        <H4 color={ColorsFonts.pureBlack}>Imposto pago: </H4>                   
                        <Paragraph color={ColorsFonts.pureBlack}>R$ {parseFloat(taxImpost.toString())}</Paragraph>  
                    </div>
                </Info>  
            </div>
            <Button setState={handleOpenModal}>Fechar pedido</Button>
            <ModalSale state={openModal} setState={setModal} />
        </ContainerModal>
    )
}