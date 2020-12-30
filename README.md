<!-- error msg -->
PS C:\Users\Trevor Pino\Desktop\techjunkies-hideout> npm run start

> tech-blog@1.0.0 start
> node server.js

express-session deprecated req.secret; provide secret option server.js:25:9
App listening on port 3001!
Executing (default): CREATE TABLE IF NOT EXISTS `Session` (`sid` VARCHAR(36) , `expires` DATETIME, `data` TEXT, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`sid`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Session`
Executing (default): CREATE TABLE IF NOT EXISTS `User` (`id` INTEGER NOT NULL auto_increment , `username` VARCHAR(255) NOT NULL, `password` VARCHAR(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `User`
Executing (default): CREATE TABLE IF NOT EXISTS `Posts` (`id` INTEGER NOT NULL auto_increment , `title` VARCHAR(255), `body` VARCHAR(255), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `userId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Posts`
Executing (default): CREATE TABLE IF NOT EXISTS `Comments` (`id` INTEGER NOT NULL auto_increment , `body` VARCHAR(255) NOT NULL, `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `postId` INTEGER, `userId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`postId`) REFERENCES `Posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, FOREIGN KEY (`userId`) 
REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE) ENGINE=InnoDB;
Executing (default): SHOW INDEX FROM `Comments`
Error: secret option required for sessions
    at session (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express-session\index.js:200:12)
    at Layer.handle [as handle_request] (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:317:13)
    at C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:335:12)
    at next (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:275:10)
    at expressInit (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\middleware\init.js:40:5)
    at Layer.handle [as handle_request] (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:317:13)
    at C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:335:12)
    at next (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:275:10)
    at Layer.handle [as handle_request] (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\layer.js:95:5)
    at trim_prefix (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:317:13)
    at C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:284:7
    at Function.process_params (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:335:12)
    at next (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:275:10)
    at Function.handle (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\router\index.js:174:3)
    at Function.handle (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\application.js:174:10)
    at Server.app (C:\Users\Trevor Pino\Desktop\techjunkies-hideout\node_modules\express\lib\express.js:39:9)
    at Server.emit (node:events:376:20)
Terminate batch job (Y/N)? y


