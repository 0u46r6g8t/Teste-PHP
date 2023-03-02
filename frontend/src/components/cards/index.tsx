import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IGlobalComponents } from "../../interface/IGlobal";
import imageDefault from "../../assets/img/default.jpg";
import { IProduct } from "../../app/features/interfaces/IProducts";
import { useAppDispatch } from "../../app/hooks";
import { addProduct } from "../../app/features/Car/carSlice";

interface ICard extends IGlobalComponents {
  product: IProduct | undefined;
}

export const CardProduct: React.FC<ICard> = ({ product, className }) => {
  const dispatch = useAppDispatch();

  return (
    <Card className={className} sx={{ minWidth: 300, borderRadius: 2 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageDefault}
        className="img-card"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product && product?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          R$ {product?.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(addProduct(product))}>Add to car</Button>
      </CardActions>
    </Card>
  );
};
