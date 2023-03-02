<?php

namespace core;

class Init
{
    use Cors;
    use Router;
    use RouterList;

    public static function start()
    {
        Cors::setCors();
        RouterList::setList();
        Router::run();
    }
}
