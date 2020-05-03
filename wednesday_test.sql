-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 03, 2020 at 12:51 PM
-- Server version: 10.1.40-MariaDB
-- PHP Version: 7.3.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `wednesday_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `cabId` int(11) NOT NULL,
  `bookingDateTime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `bookingStatus` varchar(50) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`id`, `userId`, `cabId`, `bookingDateTime`, `bookingStatus`, `createdAt`, `updatedAt`) VALUES
(1, 8, 3, '2020-05-03 09:32:28', 'Completed', '2020-05-03 09:32:28', '2020-05-03 10:06:10'),
(2, 8, 3, '2020-05-03 10:31:17', 'Completed', '2020-05-03 10:31:17', '2020-05-03 10:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `cabs`
--

CREATE TABLE `cabs` (
  `id` int(11) NOT NULL,
  `type` varchar(500) NOT NULL,
  `location` varchar(100) NOT NULL,
  `isBooked` tinyint(1) NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `cabs`
--

INSERT INTO `cabs` (`id`, `type`, `location`, `isBooked`, `createdAt`, `updatedAt`) VALUES
(1, 'Hatchback', '18.660592,73.732172', 0, '2020-05-02 00:00:00', '2020-05-02 00:00:00'),
(3, 'Sedan', '18.665462,73.741078', 0, '2020-05-02 00:00:00', '2020-05-03 10:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(500) NOT NULL,
  `mobile` varchar(20) NOT NULL,
  `email` varchar(500) NOT NULL,
  `password` varchar(500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `mobile`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(7, 'Sid', '9860676178', 'sid@test.com', '$2b$10$qzGzoJvmHsIqb78WA2UOme2nvXxluT2LldJe8quanxmSZmJ2ekvnm', '2020-05-02 11:49:51', '2020-05-02 11:49:51'),
(8, 'Sid', '9860303033', 'sidd', '$2b$10$hWMantSDaAaRrC9j2wGAYuscq18i0pBHIn63ZyenbXRSZDP2KD7M.', '2020-05-02 14:52:19', '2020-05-02 14:52:19'),
(9, 'John Doe', '9999900000', 'email@test.com', '$2b$10$SB/kOw8wCYXx5R29NrfJs.6hq5xFMZvHuKJxcPGKB2hsDVewbnZlW', '2020-05-03 10:40:01', '2020-05-03 10:40:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cabs`
--
ALTER TABLE `cabs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cabs`
--
ALTER TABLE `cabs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
