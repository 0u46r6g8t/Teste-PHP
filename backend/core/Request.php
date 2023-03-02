<?php

namespace core;

use core\Config;

class Request
{
    protected $return = [
        "error" => false,
        "data" => [],
        "message" => ""
    ];

    public function setError($msg){
        http_response_code(404);
        $this->return["error"] = true;
        $this->return["message"] = $msg;
        $this->return["data"] = [];
    }

    public function setData($obj){
        $this->return["error"] = false;
        $this->return["message"] = "Requisição realizada com sucesso";
        $this->return["data"] = $obj;
    }

    public static function getAbsoluteUrl()
    {
        $url = filter_input(INPUT_GET, 'url', FILTER_SANITIZE_URL);
        $url = str_replace(Config::URL, '', $_SERVER['REQUEST_URI']);
        return $url;
    }

    public static function getMethod()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    protected function redirect($url)
    {
        header("Location: " . $this->getBaseUrl() . $url);
        exit;
    }

    protected function getBaseUrl()
    {
        $base = (isset($_SERVER['HTTPS']) && strtolower($_SERVER['HTTPS']) == 'on') ? 'https://' : 'http://';
        $base .= $_SERVER['SERVER_NAME'];
        if ($_SERVER['SERVER_PORT'] != '80') {
            $base .= ':' . $_SERVER['SERVER_PORT'];
        }

        return $base . '/';
    }

    public function getRequestData()
    {
        switch (self::getMethod()) {
            case 'get':
                return $_GET;
            case 'put':
            case 'delete':
                parse_str(file_get_contents("php://input"), $data);
                return (array) $data;
            case 'post':
                $data = json_decode(file_get_contents("php://input"));
                
                if ($data == null) {
                    $data = $_POST;
                }
                
                return (array) $data;
        }
    }

    public function response()
    {
        header("Content-Type: application/json");
        echo json_encode($this->return, JSON_UNESCAPED_UNICODE);
        exit;
    }
}
