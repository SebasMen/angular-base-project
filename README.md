# AngularBaseProject

This project seeks to speed up the creation time of web applications developed with Angular, through an already organized folder structure but at the same time a set of reused components and structures already defined and tested for their implementation.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Index

1. Froms
2. Graphics
3. Custom Directives
4. Auth

## Forms

This section of the project implements components ready to be implemented in any Angular project, it incorporates forms designed and connected with the ReactFormsModule module so that the handling of information such as errors is simple and fast to implement.
There is also a section that implements a select type input in a nested way connected to a real API to see its functionality, this in order to save time when implementing it to a project.


## Graphics  

Charts are elements that are frequently used in dashborads, here are some of the most common charts using the [ng2-charts](https://www.npmjs.com/package/ng2-charts) library created specifically for use in Dashboards. Angular projects quickly.

## Custom Directives 

This section covers the implementation of custom directives, the main directive seeks to facilitate the generation of error messages in forms, saving time when specifying each error message. It also implements a way to send data and change it in real time if it becomes necessary.

## Auth  

Authentication is something very important for any application, for this reason a form of route protection was implemented through guards; This process may vary depending on how the backend works, but its implementation is usually similar.
