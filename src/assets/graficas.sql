-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-07-2020 a las 22:11:52
-- Versión del servidor: 10.4.13-MariaDB
-- Versión de PHP: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `graficas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `graf_categoria`
--

CREATE TABLE `graf_categoria` (
  `PK_CATE` int(11) NOT NULL,
  `NOMBRE_CATE` varchar(255) NOT NULL,
  `COLOR_CATE` varchar(255) NOT NULL,
  `DATOS_CATE` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `graf_categoria`
--

INSERT INTO `graf_categoria` (`PK_CATE`, `NOMBRE_CATE`, `COLOR_CATE`, `DATOS_CATE`) VALUES
(1, 'Hombres', '#1449a9', '1,2,3,4,5,4,10'),
(3, 'Mujeres', '#8221e2', '1,4,5,6,8'),
(4, 'Aliens', '#21d585', '1,2,3,4,5');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `graf_categoria`
--
ALTER TABLE `graf_categoria`
  ADD PRIMARY KEY (`PK_CATE`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `graf_categoria`
--
ALTER TABLE `graf_categoria`
  MODIFY `PK_CATE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
