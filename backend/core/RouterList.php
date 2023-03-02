<?php

namespace core;

use core\RouterBase;

trait RouterList
{
    public static function setList()
    {
        RouterBase::get('/', 'HomeController@index');
        RouterBase::get('/product', 'ProductController@index');
        RouterBase::post('/product', 'ProductController@add');
        RouterBase::put('/product', 'ProductController@edit');
        RouterBase::get('/type', 'ProductTypeController@index');
        RouterBase::post('/type', 'ProductTypeController@add');
        RouterBase::post('/sale', 'SaleController@add');
    }
}
