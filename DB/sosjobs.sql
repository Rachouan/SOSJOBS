-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Machine: localhost
-- Gegenereerd op: 20 mei 2015 om 14:17
-- Serverversie: 5.5.38
-- PHP-versie: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Databank: `sosjobs`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `employer`
--

CREATE TABLE `employer` (
`id` int(11) NOT NULL,
  `company_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_confirmation` tinyint(1) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `vat_number` varchar(255) NOT NULL,
  `subscription` int(11) NOT NULL,
  `user_agreement_accepted` tinyint(1) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `color_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `students`
--

CREATE TABLE `students` (
`id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_confirmation` tinyint(1) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth_date` date NOT NULL,
  `field_of_study` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `street` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `zip_code` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `picture` varchar(255) NOT NULL,
  `reg_number` varchar(255) NOT NULL,
  `user_agreement_accepted` double NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `about` varchar(255) NOT NULL,
  `about_extra` varchar(255) NOT NULL,
  `fb_link` varchar(255) NOT NULL,
  `cv` varchar(255) NOT NULL,
  `color_code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `vacancies`
--

CREATE TABLE `vacancies` (
`id` int(11) NOT NULL,
  `creator_id` int(11) NOT NULL,
  `location` varchar(255) NOT NULL,
  `latitude` varchar(255) NOT NULL,
  `longitude` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `creation_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `category` varchar(255) NOT NULL,
  `description` varchar(500) NOT NULL,
  `color_code` int(11) NOT NULL,
  `views` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `employer`
--
ALTER TABLE `employer`
 ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `students`
--
ALTER TABLE `students`
 ADD PRIMARY KEY (`id`);

--
-- Indexen voor tabel `vacancies`
--
ALTER TABLE `vacancies`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `employer`
--
ALTER TABLE `employer`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `students`
--
ALTER TABLE `students`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT voor een tabel `vacancies`
--
ALTER TABLE `vacancies`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
