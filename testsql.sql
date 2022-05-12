CREATE DATABASE /*!32312 IF NOT EXISTS*/`tutorial_2022` /*!40100 DEFAULT CHARACTER SET latin1 */;

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(200) DEFAULT NULL,
  `phone_number` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`user_id`,`user_name`,`phone_number`) values (5,'Aruna','10000000'),(4,'Obi','22222'),(6,'Aruna','10000000'),(7,'festus','10000004'),(8,'michael','10000004'),(9,'michael','10000004'),(10,'michael','10000004'),(11,'michael','10000004'),(12,'michael','10000004'),(13,'michael','10000004');
