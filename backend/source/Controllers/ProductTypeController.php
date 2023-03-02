<?php

namespace source\Controllers;

use core\Request;
use source\Contracts\IController;
use source\Models\ProductType;

class ProductTypeController extends Request implements IController
{

    public function index()
    {
        $prod = new ProductType();
        $this->setData($prod->getList());
    }

    public function add()
    {
        $data = $this->getRequestData();

        if (!isset($data['text'])) {
            $this->setError("Informe nome do tipo do produto");
            exit;
        }

        $type = new ProductType();
        $id = $type->insert($data);
        $this->setData(["id" => $id]);
    }
    
    public function __destruct()
    {
        $this->response();
    }
}
