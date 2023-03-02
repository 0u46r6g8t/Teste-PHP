<?php

namespace source\Models;

use core\Config;
use source\Models\Model;
use source\Utils\Uuid;

class ProductType extends Model
{
    public function getList()
    {
        $query = $this->read("SELECT * FROM product_type");
        return $query->fetchAll();
    }

    public function insert($data)
    {
        $data['id'] = Uuid::v4();
        $this->create("product_type", $data);
        return $data['id'];
    }
}
