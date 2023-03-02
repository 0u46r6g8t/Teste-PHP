<?php

namespace source\Models;

use core\Config;
use source\Models\Model;
use source\Utils\Uuid;

class Sales extends Model
{
    public function getList()
    {
        $query = $this->read("SELECT * FROM product");
        return $query->fetchAll();
    }

    public function getItem($id)
    {
        $query = $this->read("SELECT * FROM sales WHERE id = :id", "id=$id");
        return $query->fetch();
    }

    public function updateItem($id, $priceSum, $taxSum)
    {
        $this->update("sales", ["full_price", "tax_full_price"], "id=$id", "id=$id&full_price=$priceSum&tax_full_price=$taxSum");
    }

    public function insert($data)
    {
        $salesItem = new SalesItem();
        $sum = ["full_price"=>0, "tax_full_price"=>0];

        foreach($data as $item){
            $product = $this->getProductPrice($item->fk_product, $item->quantity);
            $sum["full_price"] += $product['full_price'];
            $sum["tax_full_price"] += $product['tax_full_price'];
        }
        
        $id = Uuid::v4();

        $this->create("sales", array_merge(["id" => $id], $sum));

        $salesItem->insert($data, $id);
        return $id;
    }

    private function getProductPrice($id, $quantity){
        $product = new Product();
        $data = $product->getItem($id);

        $price = $data->price * $quantity;
        $tax = $data->tax_price * $quantity;

        return ["full_price" => $price, "tax_full_price" => $tax];
    }
}
