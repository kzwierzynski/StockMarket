# Stocks Project - Front-end part:
Project is divided into 2 main parts:

Backend: located in parent directory. That part of the project  was developed using node.js, Express.js, MongoDB and necessary dependencies. In parent directory you can find more detailed info about front-end part of the project in `ReadMe.md` file, and dependencies that are used- in `package.json` file.
    
Front-end: located in this directory. This part of the project was developed using Angular, angular CLI and necessary dependencies. in `./src/` directory are stored cource files for Front-end application. There you can find  `main.ts` and `index.html` that use modules, components, services and directives which can be found in `./src/app/` directory. In `.src/asstes/`directory and in `./src/styles.css` is custom styling. Front-end application uses Bootstrap 4 along with some of its dependencies.

Dependencies used for this part of the project are to be found in `package.json` file inside of this directory.

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `../public/` directory. When you run a `nodemon` command in Backend project directory, and navigate to `http://localhost:3000/` you will have a running angular (Front-end) app before your eyes.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## To ensure full compatibility, use the following technology stack:

Angular CLI: 1.7.3
Node: 8.9.4
Angular: 5.2.9
... animations, common, compiler, compiler-cli, core, forms
... http, language-service, platform-browser
... platform-browser-dynamic, router

@angular/cli: 1.7.3
@angular-devkit/build-optimizer: 0.3.2
@angular-devkit/core: 0.3.2
@angular-devkit/schematics: 0.3.2
@ngtools/json-schema: 1.2.0
@ngtools/webpack: 1.10.2
@schematics/angular: 0.3.2
@schematics/package-update: 0.3.2
typescript: 2.5.3
webpack: 3.11.0
