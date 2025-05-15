<!-- # AngularIntroduction

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page. -->


#  Angular User Registration & Authentication App

This project is a full-stack web application built with **Angular** (frontend) and **Node.js + Express** (backend), connected via a RESTful API. It provides **user registration**, **authentication**, and **email duplication checking** through a reactive form system.

---

##  Live Stack Overview

- **Frontend:** Angular 17+
- **Backend:** Node.js + Express.js
- **Database:** MongoDB (via Mongoose)
- **Styles:** Angular Material + Bootstrap
- **HTTP Communication:** Angular `HttpClient` with REST API
- **Authentication:** JSON Web Tokens (JWT)

---

##  Features

###  User Registration
- Reactive form with validation:
  - Required fields
  - Email format check
  - Password confirmation
- Live check for **duplicate email** using backend API.

###  User Login
- Sends credentials to backend
- Receives and stores JWT on success
- Handles error messages on failure

###  Backend API
- `/api/auth/login` – user authentication
- `/api/users/register` – user registration
- `/api/users/check_duplicate_email/:email` – email validation

---

##  Frontend–Backend Connection

This Angular app connects to the Node.js backend through RESTful HTTP calls.

### In Development:
- Angular runs on `http://localhost:4200`
- Node backend runs on `http://localhost:3001`
- Uses a `proxy.conf.json` file so Angular can access backend routes without CORS issues.


