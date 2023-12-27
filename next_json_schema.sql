-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 27 Des 2023 pada 03.51
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `json_schema_checker`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `results`
--

CREATE TABLE `results` (
  `id` int(11) NOT NULL,
  `url_path` varchar(255) NOT NULL,
  `json_string` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`json_string`)),
  `json_schema` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`json_schema`)),
  `status` tinyint(1) NOT NULL,
  `dt_insert` datetime NOT NULL DEFAULT current_timestamp(),
  `dt_modified` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `results`
--

INSERT INTO `results` (`id`, `url_path`, `json_string`, `json_schema`, `status`, `dt_insert`, `dt_modified`) VALUES
(9, '/testing', '{\"responseCode\":\"2005400\",\"responseMessage\":\"Successful\",\"referenceNo\":\"08493296759260462774\",\"partnerReferenceNo\":\"213423121521232\",\"additionalInfo\":{\"amount\":\"2000.00\",\"currency\":\"IDR\",\"merchantTrxId\":\"\",\"remarks\":\"\"}}', '\"{type:\\\"object\\\",properties:{responseCode:{type:\\\"string\\\",},responseMessage:{type:\\\"string\\\",},referenceNo:{type:\\\"string\\\",},partnerReferenceNo:{type:\\\"string\\\",},additionalInfo:{type:\\\"object\\\",properties:{amount:{type:\\\"string\\\",},currency:{type:\\\"string\\\",},merchantTrxId:{type:\\\"string\\\",},remarks:{type:\\\"string\\\",},},required:[\\\"amount\\\",\\\"currency\\\",\\\"merchantTrxId\\\",\\\"remarks\\\"],},},required:[\\\"responseCode\\\",\\\"responseMessage\\\",\\\"referenceNo\\\",\\\"partnerReferenceNo\\\",\\\"additionalInfo\\\",],}\"', 1, '2023-12-27 07:57:03', '2023-12-27 07:57:03'),
(10, '/cobalah', '{\"responseCode\":\"2005400\",\"responseMessage\":\"Successful\",\"referenceNo\":\"08493296759260462774\",\"partnerReferenceNo\":\"213423121521232\",\"additionalInfo\":{\"amount\":\"2000.00\",\"currency\":\"IDR\",\"merchantTrxId\":\"\",\"remarks\":\"\"}}', '\"{type:\\\"object\\\",properties:{responseCode:{type:\\\"string\\\",},responseMessage:{type:\\\"string\\\",},referenceNo:{type:\\\"string\\\",},partnerReferenceNo:{type:\\\"string\\\",},additionalInfo:{type:\\\"object\\\",properties:{amount:{type:\\\"string\\\",},currency:{type:\\\"string\\\",},merchantTrxId:{type:\\\"string\\\",},remarks:{type:\\\"string\\\",},},required:[\\\"amount\\\",\\\"currency\\\",\\\"merchantTrxId\\\",\\\"remarks\\\"],},},required:[\\\"responseCode\\\",\\\"responseMessage\\\",\\\"referenceNo\\\",\\\"partnerReferenceNo\\\",\\\"additionalInfo\\\",],}\"', 1, '2023-12-27 08:02:00', '2023-12-27 08:02:00'),
(13, '/oke', '{\"responseCode\":\"2005400\",\"responseMessage\":\"Successful\",\"referenceNo\":\"08493296759260462774\",\"partnerReferenceNo\":\"213423121521232\",\"additionalInfo\":{\"amount\":\"2000.00\",\"currency\":\"IDR\",\"merchantTrxId\":\"\",\"remarks\":\"\"}}', '\"{type:\\\"object\\\",properties:{responseCode:{type:\\\"string\\\",},responseMessage:{type:\\\"string\\\",},referenceNo:{type:\\\"string\\\",},partnerReferenceNo:{type:\\\"string\\\",},additionalInfo:{type:\\\"object\\\",properties:{amount:{type:\\\"string\\\",},currency:{type:\\\"string\\\",},merchantTrxId:{type:\\\"string\\\",},remarks:{type:\\\"string\\\",},},required:[\\\"amount\\\",\\\"currency\\\",\\\"merchantTrxId\\\",\\\"remarks\\\"],},},required:[\\\"responseCode\\\",\\\"responseMessage\\\",\\\"referenceNo\\\",\\\"partnerReferenceNo\\\",\\\"additionalInfo\\\",],}\"', 1, '2023-12-27 08:17:38', '2023-12-27 08:17:38'),
(14, '/okelah', '{\"responseCode\":\"2005400\",\"responseMessage\":\"Successful\",\"referenceNo\":\"08493296759260462774\",\"partnerReferenceNo\":\"213423121521232\",\"additionalInfo\":{\"amount\":\"2000.00\",\"currency\":\"IDR\",\"merchantTrxId\":\"\",\"remarks\":\"\"}}', '\"{type:\\\"object\\\",properties:{responseCode:{type:\\\"string\\\",},responseMessage:{type:\\\"string\\\",},referenceNo:{type:\\\"string\\\",},partnerReferenceNo:{type:\\\"string\\\",},additionalInfo:{type:\\\"object\\\",properties:{amount:{type:\\\"string\\\",},currency:{type:\\\"string\\\",},merchantTrxId:{type:\\\"string\\\",},remarks:{type:\\\"string\\\",},},required:[\\\"amount\\\",\\\"currency\\\",\\\"merchantTrxId\\\",\\\"remarks\\\"],},},required:[\\\"responseCode\\\",\\\"responseMessage\\\",\\\"referenceNo\\\",\\\"partnerReferenceNo\\\",\\\"additionalInfo\\\",],}\"', 1, '2023-12-27 08:20:24', '2023-12-27 08:20:24'),
(15, '/cobaaja', '{\"responseCode\":\"2005400\",\"responseMessage\":\"Successful\",\"referenceNo\":\"08493296759260462774\",\"partnerReferenceNo\":\"213423121521232\",\"additionalInfo\":{\"amount\":\"2000.00\",\"currency\":\"IDR\",\"merchantTrxId\":\"\",\"remarks\":\"\"}}', '\"{type:\\\"object\\\",properties:{responseCode:{type:\\\"string\\\",},responseMessage:{type:\\\"string\\\",},referenceNo:{type:\\\"string\\\",},partnerReferenceNo:{type:\\\"string\\\",},additionalInfo:{type:\\\"object\\\",properties:{amount:{type:\\\"string\\\",},currency:{type:\\\"string\\\",},merchantTrxId:{type:\\\"string\\\",},remarks:{type:\\\"string\\\",},},required:[\\\"amount\\\",\\\"currency\\\",\\\"merchantTrxId\\\",\\\"remarks\\\"],},},required:[\\\"responseCode\\\",\\\"responseMessage\\\",\\\"referenceNo\\\",\\\"partnerReferenceNo\\\",\\\"additionalInfo\\\",],}\"', 1, '2023-12-27 08:23:28', '2023-12-27 08:23:28'),
(16, '/coba-aja', '{\"responseCode\":\"2005400\",\"responseMessage\":\"Successful\",\"referenceNo\":\"08493296759260462774\",\"partnerReferenceNo\":\"213423121521232\",\"additionalInfo\":{\"amount\":\"2000.00\",\"currency\":\"IDR\",\"merchantTrxId\":\"\",\"remarks\":\"\"}}', '\"{type:\\\"object\\\",properties:{responseCode:{type:\\\"string\\\",},responseMessage:{type:\\\"string\\\",},referenceNo:{type:\\\"string\\\",},partnerReferenceNo:{type:\\\"string\\\",},additionalInfo:{type:\\\"object\\\",properties:{amount:{type:\\\"string\\\",},currency:{type:\\\"string\\\",},merchantTrxId:{type:\\\"string\\\",},remarks:{type:\\\"string\\\",},},required:[\\\"amount\\\",\\\"currency\\\",\\\"merchantTrxId\\\",\\\"remarks\\\"],},},required:[\\\"responseCode\\\",\\\"responseMessage\\\",\\\"referenceNo\\\",\\\"partnerReferenceNo\\\",\\\"additionalInfo\\\",],}\"', 1, '2023-12-27 08:38:25', '2023-12-27 08:38:25');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `results`
--
ALTER TABLE `results`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `unique_url_path` (`url_path`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `results`
--
ALTER TABLE `results`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
