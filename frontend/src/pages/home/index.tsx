import { Modal } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ITypes } from "../../app/features/interfaces/ITypes";
import { filterByType } from "../../app/features/Products/productsSlice";
import { fetchProductThunk } from "../../app/features/Products/thunk";
import { fetchTypesThunk } from "../../app/features/Types/thunk";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CardProduct } from "../../components/cards";
import { ByCarModal } from "../../components/modal/buyCar";
import { NavBarResponsive } from "../../components/navbar";
import { ColorsFonts } from "../../css/fonts/Color";
import { H1 } from "../../css/fonts/Title";
import { ContainerPage } from "../styled";

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [typeProd, setTypesProd] = useState<any>([]);
  const { products: { products, filters: { prodTypes } }, types: { types } } = useAppSelector(state => state);
  const [openModal, setOpenModal] = useState(false);

  
  useEffect(() => {
    dispatch(filterByType(products));
  }, [products]);

  const handleSearchById = (id: string) => types?.filter(item => item.id === id && item.text)[0];

  useEffect(() => {
    setTypesProd(prodTypes.map(item => item && handleSearchById(item)))
  }, [prodTypes]);

  return (
    <ContainerPage>
      <NavBarResponsive />

      <div className="container">
        {typeProd &&
          typeProd.map((type: ITypes) => (
            <div key={type.id} className="screen-products">
              <H1>{type?.text}</H1>

              <div className="products">
                {products && products.map(item => item.fk_type === type.id && 
                  <CardProduct product={item} key={item.name} className="card-home" />
                )}
              </div>
            </div>
          ))
        }
      </div>
      <ByCarModal />
    </ContainerPage>
  );
};

export default HomePage;
