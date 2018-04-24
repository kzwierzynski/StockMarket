# Stocks Project
Project is divided into 2 main parts:
    Front-end: in directory `./angular-src` of this project. This part of the project was developed useing Angular, angular CLI and dependencies. Inside of the mentioned directory you can find more detailed info about front-end part of the project in `ReadMe.md` file, and dependencies that are used in `package.json` file.
    Backend: in the main directory. The main program is located in `app.js`. 

## Development server

Run `nodemon` for a dev server available under `http://localhost:3000/`. The app will automatically reload if you change any of the source files.
You may need to install nodemon globally using `npm install -g nodemon` in your command prompt.

## To ensure full compatibility, use the following technology stack:

First, install the following:
    npm: 5.6.0
    Node: 8.9.4
    MongoDB shell version: 3.2.19-14-ge59d00a

To start MongoDB, in `./bin/` directory (inside of your MongoDB directory) you need to run: `mongod`. With command `mongo` you can run MongoDB shell. You may need Administrator privileges to do that.

Then, in the Backend project directory you can run `npm install` to install all the dependencies used in this project. 
In case of problems check versions of those dependencies:
    mongoose: 5.0.14
    express: 4.16.3
    bcryptjs: 2.4.3
    jsonwebtoken: 8.2.1,
    passport: 0.4.0,
    passport-jwt: 4.0.0

devDependencies:
    Angular CLI: 1.7.3
