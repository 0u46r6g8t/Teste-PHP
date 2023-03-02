<?php

namespace core;

use core\Config;
use core\Request;
use core\RouterBase;

trait Router
{

    public static function run()
    {
        $method = Request::getMethod();
        $url = Request::getAbsoluteUrl();

        $controller = Config::HOME_STANDARD;
        $action = Config::HOME_ACTION_STANDARD;

        $args = [];
        $exist = false;

        if (isset(RouterBase::$routes[$method])) {
            $routes = RouterBase::$routes[$method];
            
            foreach ($routes as $endpoint => $path) {
                $pattern = preg_replace('(\{[a-z0-9]{1,}\})', '([a-z0-9-]{1,})', $endpoint);
                
                if (preg_match('#^(' . $pattern . ')*$#i', $url, $matches) === 1) {
                    array_shift($matches);
                    array_shift($matches);
                    
                    $itens = array();
                    if (preg_match_all('(\{[a-z0-9]{1,}\})', $endpoint, $m)) {
                        $itens = preg_replace('(\{|\})', '', $m[0]);
                    }

                    foreach ($matches as $key => $match) {
                        $args[$itens[$key]] = $match;
                    }
                    
                    $callbackSplit = explode('@', $path);
                    $controller = $callbackSplit[0];
                    if (isset($callbackSplit[1])) {
                        $action = $callbackSplit[1];
                    }
                    
                    $exist = true;
                    break;
                }
            }
        }
        
        if (!$exist) {
            $controller = Config::NOT_FOUND_STANDARD;
        }
        
        $controller = "source\Controllers\\{$controller}";
        $definedController = new $controller();
        $definedController->$action($args);
    }
}
