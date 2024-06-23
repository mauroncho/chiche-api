-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         8.0.30 - MySQL Community Server - GPL
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para don_chiiche
CREATE DATABASE IF NOT EXISTS `don_chiiche` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `don_chiiche`;

-- Volcando estructura para tabla don_chiiche.categorias
CREATE TABLE IF NOT EXISTS `categorias` (
  `cod_categoria` int NOT NULL AUTO_INCREMENT,
  `tipo_categoria` varchar(40) NOT NULL,
  PRIMARY KEY (`cod_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla don_chiiche.categorias: ~8 rows (aproximadamente)
INSERT INTO `categorias` (`cod_categoria`, `tipo_categoria`) VALUES
	(1, 'Plato_principal'),
	(2, 'Bebida'),
	(3, 'Entrada');

-- Volcando estructura para tabla don_chiiche.clientes
CREATE TABLE IF NOT EXISTS `clientes` (
  `id_clientes` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `num_doc` int NOT NULL,
  PRIMARY KEY (`id_clientes`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla don_chiiche.clientes: ~8 rows (aproximadamente)
INSERT INTO `clientes` (`id_clientes`, `nombre`, `apellido`, `num_doc`) VALUES
	(1, 'Juan', 'Perez', 27666999),
	(2, 'Kevin', 'Peña', 22888990),
	(3, 'Arturo', 'Rosa', 33555884),
	(4, 'Lautaro', 'Gautier', 11555789),
	(5, 'Kris', 'Paz', 45667890),
	(6, 'Lauti', 'Prezco', 55768908),
	(7, 'Joaco', 'MC', 12345678),
	(8, 'Romeo', 'Sol', 34555785);

-- Volcando estructura para tabla don_chiiche.productos
CREATE TABLE IF NOT EXISTS `productos` (
  `cod_product` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `stock` int NOT NULL,
  `precio` float NOT NULL,
  `cod_categoria` int NOT NULL,
  `id_clientes` int NOT NULL,
  PRIMARY KEY (`cod_product`),
  KEY `cod_categoria` (`cod_categoria`),
  KEY `id_clientes` (`id_clientes`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`cod_categoria`) REFERENCES `categorias` (`cod_categoria`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`id_clientes`) REFERENCES `clientes` (`id_clientes`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla don_chiiche.productos: ~8 rows (aproximadamente)
INSERT INTO `productos` (`cod_product`, `nombre`, `stock`, `precio`, `cod_categoria`, `id_clientes`) VALUES
	(100, 'Pancho Mexicano', 10, 100.5, 1, 2),
	(101, 'Pancho Salteño', 20, 300, 1, 1),
	(102, 'Papas Cheddar', 50, 250.5, 3, 8),
	(103, 'Coca Cola', 100, 200, 2, 8),
	(104, 'Pancho Tucumano', 15, 500, 1, 6),
	(105, 'Aros de Cebolla', 36, 600, 3, 4),
	(106, 'Pancho Mexicano', 13, 550, 1, 3),
	(107, 'Agua', 400, 100, 2, 5);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
