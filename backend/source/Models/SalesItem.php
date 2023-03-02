<?php

namespace source\Models;

use core\Config;
use source\Models\Model;
use source\Utils\Uuid;

class SalesItem extends Model
{
    public function insert($data, $fk_sale)
    {
        foreach ($data as $item) {
            $temp['id'] = Uuid::v4();
            $temp['quantity'] = $item->quantity;
            $temp['fk_product'] = $item->fk_product;
            $temp['fk_sale'] = $fk_sale;
            $this->create("sale_itens", $temp);
        }
    }
}
