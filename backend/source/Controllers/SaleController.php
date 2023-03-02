<?php

namespace source\Controllers;

use core\Request;
use source\Models\Product;
use source\Contracts\IController;
use source\Models\Sales;
use source\Utils\Uuid;

class SaleController extends Request implements IController
{

    public function index()
    {

    }

    public function add()
    {
        $data = $this->getRequestData();

        if(!isset($data['products']) || empty($data['products'])){
            $this->setError("Informe o carrinho de compras, id do produto e quantidade");
            exit;
        }

        $products = json_decode($data['products']);
        
        foreach($products as $item){
            if (!isset($item->quantity) || empty($item->quantity)) {
                $this->setError("Informe a quantidade da venda");
                exit;
            }
    
            if (!isset($item->fk_product) || empty($item->fk_product) || !Uuid::is_valid($item->fk_product)) {
                $this->setError("Tipo do produto não informado ou fora do padrão Uuid v4");
                exit;
            }
        }

        $sale = new Sales();
        $id = $sale->insert($products);

        $this->setData(["id" => $id]);
    }

    public function __destruct()
    {
        $this->response();
    }
}
