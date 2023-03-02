<?php

namespace source\Controllers;

use core\Request;
use source\Models\Product;
use source\Contracts\IController;
use source\Utils\Uuid;

class ProductController extends Request implements IController
{

    public function index()
    {
        $prod = new Product();
        
        $this->setData($prod->getList());
    }

    public function add()
    {
        $data = $this->getRequestData();

        if (!isset($data['name']) || empty($data['name'])) {
            $this->setError("Informe nome do produto");
            exit;
        }

        if (!isset($data['price']) || empty($data['price'])) {
            $this->setError("Informe preço do produto");
            exit;
        }

        if (isset($data['tax_price']) && ($data['tax_price'] > 1 || $data['tax_price'] < 0)) {
            $this->setError("Informe valor do imposto em porcentagem (entre 0 e 1)");
            exit;
        }

        if (!isset($data['description']) || empty($data['description'])) {
            $this->setError("Informe a descrição do produto");
            exit;
        }

        if (!isset($data['fk_type']) || empty($data['fk_type']) || !Uuid::is_valid($data['fk_type'])) {
            $this->setError("Tipo do produto não informado ou for do padrão Uuid v4");
            exit;
        }

        $prod = new Product();
        $id = $prod->insert($data);

        $this->setData(["id" => $id]);
    }

    public function __destruct()
    {
        $this->response();
    }
}
