<?php

namespace source\Models;

use core\Config;
use source\Models\Model;
use source\Utils\Uuid;

class Product extends Model
{
    public function getList()
    {
        $query = $this->read("SELECT * FROM product");
        return $query->fetchAll();
    }

    public function getItem($id)
    {
        $query = $this->read("SELECT * FROM product WHERE id = :id", "id=$id");
        return $query->fetch();
    }

    public function insert($data)
    {
        $data['id'] = Uuid::v4();
        $data['price'] = str_replace(",", ".", $data['tax_price']);

        if (!isset($data['tax_price'])) {
            $data['tax_price'] = Config::TAX_BASE * $data['price'];
        } else {
            $data['tax_price'] = str_replace(",", ".", $data['tax_price']);
            $data['tax_price'] = $data['tax_price'] * $data['price'];
        }

        $this->create("product", $data);
        return $data['id'];
    }
}
