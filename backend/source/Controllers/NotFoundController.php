<?php

namespace source\Controllers;

use core\Request;
use source\Contracts\IController;

class NotFoundController extends Request implements IController{

    public function index(){
        $this->setError("Rota inexistente");
    }

    public function __destruct()
    {
        $this->response();
    }
}