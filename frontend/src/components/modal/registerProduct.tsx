import { Modal, Box, Typography, TextField, TextareaAutosize } from "@mui/material"
import { style } from "@mui/system"
import { useForm } from "react-hook-form"
import { fetchCreateProductThunk } from "../../app/features/Products/thunk"
import { useAppDispatch } from "../../app/hooks"
import { ColorsFonts } from "../../css/fonts/Color"
import { H1 } from "../../css/fonts/Title"
import { IGlobalComponents } from "../../interface/IGlobal"
import { Button } from "../Button"
import { ContainerRegisterProd } from "./styled"

export const RegisterProdModal: React.FC<IGlobalComponents> = ({ setState, state }) => {
    const dispatch = useAppDispatch();
    const form = useForm();

    const handleCreateData = () => {
        dispatch(fetchCreateProductThunk({
            description: "",
            fk_type: "",
            name: "",
            tax_price: "",
            price: ""
        }));
    }

    return (
        <Modal
            open={true}
            onClose={() => setState(state)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={{
                width: 400,
                height: 400,
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
                    <H1>Registrar produto</H1>
                </Typography>

                <ContainerRegisterProd>
                    <TextField sx={{ width: 300 }} id="standard-basic" label="Nome do produto" variant="standard" />
                    <TextField sx={{ width: 300 }} id="standard-basic" label="Valor" variant="standard" />
                    <TextField sx={{ width: 300 }} id="standard-basic" label="Taxa" variant="standard" />
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={3}
                        maxRows={10}
                        placeholder="Descreva o produto"
                        style={{ width: 300, marginTop: 10 }}
                        />
                </ContainerRegisterProd>

                <Button typeColor={ColorsFonts.secondary}>Cadastrar novo produto</Button>
            </Box>
        </Modal>
    )
}