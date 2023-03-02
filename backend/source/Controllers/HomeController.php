<?php

namespace source\Controllers;

use core\Request;
use source\Models\Sales;
use source\Contracts\IController;

class HomeController extends Request implements IController{

    public function index(){
        $sale = new Sale();
        
        $this->setData($sale->getList());
    }

    public function teste($params){
        echo $params['msg'];
    }   

    public function __destruct()
    {
        $this->response();
    }
}