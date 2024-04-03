-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: generaldb
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attendance_tbl`
--

DROP TABLE IF EXISTS `attendance_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attendance_tbl` (
  `attendence_id` int NOT NULL AUTO_INCREMENT,
  `er_no` int DEFAULT NULL,
  `date` date DEFAULT NULL,
  `attendance` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`attendence_id`),
  KEY `er_no_idx` (`er_no`),
  CONSTRAINT `er_no` FOREIGN KEY (`er_no`) REFERENCES `student_master` (`stuid`)
) ENGINE=InnoDB AUTO_INCREMENT=18200 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `cities_tbl`
--

DROP TABLE IF EXISTS `cities_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city_name` varchar(45) DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=604 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `education_detail`
--

DROP TABLE IF EXISTS `education_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `boardname` varchar(45) DEFAULT NULL,
  `coursename` varchar(45) DEFAULT NULL,
  `univercity` varchar(45) DEFAULT NULL,
  `passingyear` int DEFAULT NULL,
  `percentage` decimal(6,4) DEFAULT NULL,
  `edu_empid` int NOT NULL,
  `edu_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `edu_id_idx` (`edu_id`),
  KEY `empid_idx` (`edu_empid`),
  CONSTRAINT `edu_empid` FOREIGN KEY (`edu_empid`) REFERENCES `employeebasic_details` (`emp_id`),
  CONSTRAINT `edu_id` FOREIGN KEY (`edu_id`) REFERENCES `selection_tbl` (`selection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1024 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `employeebasic_details`
--

DROP TABLE IF EXISTS `employeebasic_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employeebasic_details` (
  `emp_id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  `phoneno` bigint NOT NULL,
  `address1` varchar(45) NOT NULL,
  `address2` varchar(45) DEFAULT NULL,
  `designation` varchar(255) DEFAULT NULL,
  `gender_id` int DEFAULT NULL,
  `relationship_id` int DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  PRIMARY KEY (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=275 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `examtype_master`
--

DROP TABLE IF EXISTS `examtype_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examtype_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `exam_type` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `language_tbl`
--

DROP TABLE IF EXISTS `language_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `language_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `language_empid` int DEFAULT NULL,
  `lang_id` int DEFAULT NULL,
  `skill_id` int DEFAULT NULL,
  `read_id` int DEFAULT NULL,
  `write_id` int DEFAULT NULL,
  `speak_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `empid_idx` (`language_empid`),
  KEY `skill_id_idx` (`skill_id`),
  KEY `lang_id_idx` (`lang_id`),
  KEY `read_id_idx` (`read_id`),
  KEY `write_id_idx` (`write_id`),
  KEY `speak_id_idx` (`speak_id`),
  CONSTRAINT `lang_id` FOREIGN KEY (`lang_id`) REFERENCES `selection_tbl` (`selection_id`),
  CONSTRAINT `language_empid` FOREIGN KEY (`language_empid`) REFERENCES `employeebasic_details` (`emp_id`),
  CONSTRAINT `read_id` FOREIGN KEY (`read_id`) REFERENCES `selection_tbl` (`selection_id`),
  CONSTRAINT `skill_id` FOREIGN KEY (`skill_id`) REFERENCES `selection_tbl` (`selection_id`),
  CONSTRAINT `speak_id` FOREIGN KEY (`speak_id`) REFERENCES `selection_tbl` (`selection_id`),
  CONSTRAINT `write_id` FOREIGN KEY (`write_id`) REFERENCES `selection_tbl` (`selection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=473 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `option_tbl`
--

DROP TABLE IF EXISTS `option_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `option_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `option_id` varchar(45) DEFAULT NULL,
  `option_key` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `preference_tbl`
--

DROP TABLE IF EXISTS `preference_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference_tbl` (
  `preference_id` int NOT NULL AUTO_INCREMENT,
  `pref_empid` int DEFAULT NULL,
  `prefered_location` varchar(45) DEFAULT NULL,
  `noticeperiod` varchar(255) DEFAULT NULL,
  `expectedctc` varchar(255) DEFAULT NULL,
  `currentctc` varchar(255) DEFAULT NULL,
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`preference_id`),
  KEY `empid_idx` (`pref_empid`),
  KEY `designationid_idx` (`department_id`),
  CONSTRAINT `designationid` FOREIGN KEY (`department_id`) REFERENCES `option_tbl` (`id`),
  CONSTRAINT `pref_empid` FOREIGN KEY (`pref_empid`) REFERENCES `employeebasic_details` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `referencecontact_tbl`
--

DROP TABLE IF EXISTS `referencecontact_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referencecontact_tbl` (
  `referencecontact_id` int NOT NULL AUTO_INCREMENT,
  `ref_empid` int NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `contactno` bigint DEFAULT NULL,
  `relation` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`referencecontact_id`),
  KEY `empid_idx` (`ref_empid`),
  CONSTRAINT `ref_empid` FOREIGN KEY (`ref_empid`) REFERENCES `employeebasic_details` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=283 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `registrationdetails_tbl`
--

DROP TABLE IF EXISTS `registrationdetails_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registrationdetails_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `sault` varchar(45) NOT NULL,
  `activation_code` varchar(45) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `result_tbl`
--

DROP TABLE IF EXISTS `result_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `result_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `result_er_no` int DEFAULT NULL,
  `extype_id` int DEFAULT NULL,
  `sub_id` int DEFAULT NULL,
  `theorymarks` int DEFAULT NULL,
  `practicalmarks` int DEFAULT NULL,
  `totalmarks` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `er_no_idx` (`result_er_no`),
  KEY `extype_id_idx` (`extype_id`),
  KEY `sub_id_idx` (`sub_id`),
  CONSTRAINT `extype_id` FOREIGN KEY (`extype_id`) REFERENCES `examtype_master` (`id`),
  CONSTRAINT `result_er_no` FOREIGN KEY (`result_er_no`) REFERENCES `student_master` (`stuid`),
  CONSTRAINT `sub_id` FOREIGN KEY (`sub_id`) REFERENCES `subject_master` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3601 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `selection_tbl`
--

DROP TABLE IF EXISTS `selection_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `selection_tbl` (
  `selection_id` int NOT NULL AUTO_INCREMENT,
  `selection_name` varchar(45) DEFAULT NULL,
  `selection_key` int NOT NULL,
  PRIMARY KEY (`selection_id`,`selection_key`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `state_tbl`
--

DROP TABLE IF EXISTS `state_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `state_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `student_master`
--

DROP TABLE IF EXISTS `student_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master` (
  `stuid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `contact` bigint DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB AUTO_INCREMENT=440 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `student_master_tbl`
--

DROP TABLE IF EXISTS `student_master_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master_tbl` (
  `stuid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `contact` bigint DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `created_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`stuid`)
) ENGINE=InnoDB AUTO_INCREMENT=100001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `subject_master`
--

DROP TABLE IF EXISTS `subject_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject_master` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subject_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `technologies_tbl`
--

DROP TABLE IF EXISTS `technologies_tbl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technologies_tbl` (
  `id` int NOT NULL AUTO_INCREMENT,
  `empid` int DEFAULT NULL,
  `technologies_id` int DEFAULT NULL,
  `skilllevel_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `skilllevel_id_idx` (`skilllevel_id`),
  KEY `technologies_id_idx` (`technologies_id`),
  KEY `empid_idx` (`empid`),
  CONSTRAINT `skilllevel_id` FOREIGN KEY (`skilllevel_id`) REFERENCES `option_tbl` (`id`),
  CONSTRAINT `technologies_id` FOREIGN KEY (`technologies_id`) REFERENCES `selection_tbl` (`selection_id`)
) ENGINE=InnoDB AUTO_INCREMENT=475 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `workexperience`
--

DROP TABLE IF EXISTS `workexperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workexperience` (
  `id` int NOT NULL AUTO_INCREMENT,
  `work_empid` int DEFAULT NULL,
  `companyname` varchar(45) DEFAULT NULL,
  `designation_id` int DEFAULT NULL,
  `work_from` date DEFAULT NULL,
  `work_to` date DEFAULT NULL,
  `designation` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `designation_id_idx` (`designation_id`),
  KEY `empid_idx` (`work_empid`),
  CONSTRAINT `designation_id` FOREIGN KEY (`designation_id`) REFERENCES `option_tbl` (`id`),
  CONSTRAINT `work_empid` FOREIGN KEY (`work_empid`) REFERENCES `employeebasic_details` (`emp_id`)
) ENGINE=InnoDB AUTO_INCREMENT=443 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-03  9:43:17
