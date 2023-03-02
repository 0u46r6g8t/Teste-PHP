-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 25-Fev-2023 às 22:20
-- Versão do servidor: 8.0.31
-- versão do PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `store`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `product`
--

CREATE DATABASE store;
USE store;

DROP TABLE IF EXISTS `product`;
CREATE TABLE IF NOT EXISTS `product` (
  `id` varchar(40) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `tax_price` decimal(10,2) NOT NULL DEFAULT '0.00',
  `fk_type` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `product`
--

INSERT INTO `product` (`id`, `name`, `description`, `price`, `tax_price`, `fk_type`) VALUES
('65bb2b17-c86a-4432-beb4-4eaaf4849407', 'Veja', 'descrição do produto', '50.00', '11.25', '2fb7ef38-379a-4404-bf68-93e94d61daf3'),
('10324737-de0f-458d-be59-f8562634a218', 'Omo', 'descrição do produto', '30.00', '15.00', '2fb7ef38-379a-4404-bf68-93e94d61daf3'),
('b0be958a-db9f-46a6-a6c0-1be6f4b2c941', 'Brocolis', 'descrição do produto', '10.00', '7.50', '74c8dad5-84f8-4a70-af85-b611ca3ca9ee'),
('06025f80-4ed4-4c82-84dd-902a1a11692a', 'Alface', 'descrição do produto', '15.00', '12.75', '74c8dad5-84f8-4a70-af85-b611ca3ca9ee');

-- --------------------------------------------------------

--
-- Estrutura da tabela `product_type`
--

DROP TABLE IF EXISTS `product_type`;
CREATE TABLE IF NOT EXISTS `product_type` (
  `id` varchar(40) NOT NULL,
  `text` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `product_type`
--

INSERT INTO `product_type` (`id`, `text`) VALUES
('2fb7ef38-379a-4404-bf68-93e94d61daf3', 'Limpeza'),
('82de690c-10a5-45d4-b8dc-3e291051261f', 'Bebidas'),
('74c8dad5-84f8-4a70-af85-b611ca3ca9ee', 'Verduras'),
('bb6e70b4-b184-41ce-86b0-69eab61fc1a1', 'Proteinas');

-- --------------------------------------------------------

--
-- Estrutura da tabela `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `id` varchar(40) NOT NULL,
  `full_price` decimal(10,2) NOT NULL,
  `tax_full_price` decimal(10,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sale_itens`
--

DROP TABLE IF EXISTS `sale_itens`;
CREATE TABLE IF NOT EXISTS `sale_itens` (
  `id` varchar(40) NOT NULL,
  `quantity` int NOT NULL,
  `fk_product` varchar(40) NOT NULL,
  `fk_sale` varchar(40) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
