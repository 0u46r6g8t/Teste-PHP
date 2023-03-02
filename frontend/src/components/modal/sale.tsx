import { Modal, Box, Typography, TextField } from "@mui/material"
import { ColorsFonts } from "../../css/fonts/Color"
import BoxUI from '@mui/material/Box';
import { H1, H4, H5 } from "../../css/fonts/Title"
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { IGlobalComponents } from "../../interface/IGlobal";
import { clearList } from "../../app/features/Car/carSlice";

export const ModalSale: React.FC<IGlobalComponents> = ({ setState, state }) => {
    const dispatch = useAppDispatch();
    const { car: { valueTotal } } = useAppSelector(state => state.car) 
    const handleClearProduct = () => {
        setState(!state);
        dispatch(clearList());
    }

    return (
        <Modal
            open={state}
            onClose={() => setState(state)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{
                width: 400,
                height: 200,
                background: ColorsFonts.pureWhite,
                borderRadius: 4,
                position: 'absolute',
                top: 200,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 3,
                left: "40%"
            }}>
                <Typography sx={{ margin: "auto" }} id="modal-modal-title" variant="h6" component="h2">
                    <H1>Confirmar pedido</H1>
                </Typography>
                <Typography sx={{ margin: "auto", display: "flex", alignItems: "center", flexDirection: "row" }} id="modal-modal-title" variant="h6" component="h2">
                    <H4 color={ColorsFonts.pureBlack}>Valor total:</H4> <H5>{valueTotal}</H5>
                </Typography>
                <div style={{ display: "flex", flexDirection: "row"}}>
                    <Typography sx={{ margin: "auto" }} id="modal-modal-title" variant="h6" component="h2">
                        <Button setState={handleClearProduct} typeColor={ColorsFonts.error}>Cancelar pedido</Button>
                    </Typography>
                    <Typography sx={{ margin: "auto" }} id="modal-modal-title" variant="h6" component="h2">
                        <Button typeColor={ColorsFonts.success}>Confirmar fechamento</Button>
                    </Typography>
                </div>
                </Box>
        </Modal>
    )
}