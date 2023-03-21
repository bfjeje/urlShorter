CREATE TABLE `url` (
   `id` INT(11) NOT NULL AUTO_INCREMENT,
   `urlshort` VARCHAR(100) NOT NULL COLLATE 'utf8mb4_general_ci',
   `urllong` VARCHAR(254) NOT NULL COLLATE 'utf8mb4_general_ci',
   `created_at` DATETIME NOT NULL DEFAULT current_timestamp(),
   PRIMARY KEY (`id`) USING BTREE
)
    COLLATE='utf8mb4_general_ci'
    ENGINE=InnoDB
;
