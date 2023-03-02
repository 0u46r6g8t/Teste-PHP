import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import { ColorsFonts } from "../../css/fonts/Color";
import { RegisterProdModal } from "../modal/registerProduct";

export const NavBarResponsive = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openModal, setModal] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseRegister = () => {
    setModal(!openModal);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="transparent"
        sx={{ boxShadow: "none", backgroundColor: ColorsFonts.background }}
        enableColorOnDark={true}
        position="static"
      >
        <Toolbar>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            color="info"
          >
            <RxHamburgerMenu size={20} />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Inicio</MenuItem>
            <MenuItem onClick={handleClose}>Inserir produto</MenuItem>
            <MenuItem onClick={handleClose}>Visualizar compras</MenuItem>
          </Menu>
          <Typography
            variant="h6"
            color="white"
            sx={{ flexGrow: 1 }}
            component="div"
          >
            Venda de produtos
          </Typography>
          <Button sx={{ color: ColorsFonts.pureWhite }}>Login</Button>
        </Toolbar>
        <RegisterProdModal setState={handleCloseRegister} state={openModal} />
      </AppBar>
    </Box>
  );
};
