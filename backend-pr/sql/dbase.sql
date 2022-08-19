-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: mysql-server
-- Generation Time: Aug 19, 2022 at 02:14 PM
-- Server version: 8.0.29
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbase`
--

-- --------------------------------------------------------

--
-- Table structure for table `Pictures`
--

CREATE TABLE `Pictures` (
  `Id` int NOT NULL,
  `Title` varchar(50) NOT NULL,
  `Author` varchar(50) NOT NULL,
  `ImgType` varchar(50) NOT NULL,
  `ImgDate` int DEFAULT '0',
  `ImgPath` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Pictures`
--

INSERT INTO `Pictures` (`Id`, `Title`, `Author`, `ImgType`, `ImgDate`, `ImgPath`) VALUES
(1, 'Портрет неизвестной', 'Ф.В. Боткин', 'Модерн', 1900, '/src/img/one.jpg'),
(2, 'Утро', 'К.Ф. Богаевский', 'Модерн', 1910, '/src/img/two.jpg'),
(3, 'Женский портрет', 'А.Я. Головин', 'Модерн', 1900, '/src/img/three.jpg'),
(4, 'Звездная ночь', 'Винсент ван Гог', 'Постимпрессионизм', 1889, '/src/img/four.jpg'),
(5, 'Стога сена', 'Клод Моне', 'Импрессионизм', 1891, '/src/img/five.jpg'),
(6, 'Сенокос в Эраньи', 'Камиль Писсарро', 'Постимпрессионизм', 1889, '/src/img/six.jpg'),
(7, 'Впечатление', 'Клод Моне', 'Импрессионизм', 1872, '/src/img/seven.jpg'),
(8, 'Вид на канал Сен-Мартен', 'Альфред Сислей', 'Импрессионизм', 1870, '/src/img/eight.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Pictures`
--
ALTER TABLE `Pictures`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Pictures`
--
ALTER TABLE `Pictures`
  MODIFY `Id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
