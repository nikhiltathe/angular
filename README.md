# angular
https://www.youtube.com/watch?v=oUmVFHlwZsI&t=110s

## Pre-reqs

### Install NodeJS
zypper install nodejs-common

### Install Angular
npm install -g @angular/cli

ng --version
19.2.1

### Create Angular Project
ng new first-ng-all 
ng new first-ng-all --dry-run # optional

ng new first-ng-all --inline-style --inline-template

root@ldpda089 /gofiles/src/angular/first-ng-all $ npm start

> first-ng-all@0.0.0 start
> ng serve

http://localhost:4200/

### Create Angular Component
ng g c header # short form
ng generate component header # full form
-> creates inside the `src/app` folder

#OR (in a nested directory)
ng g c components/header
#creates Header/Component
#inside the `src/app/components` folder

ng g c home
#creates the HomeComponent
NOTE: The "--dry-run" option means no changes were made.
root@ldpda089 /gofiles/src/angular/first-ng-all  (main)$ ng g c components/header
CREATE src/app/components/header/header.component.scss (0 bytes)
CREATE src/app/components/header/header.component.html (21 bytes)
CREATE src/app/components/header/header.component.spec.ts (592 bytes)
CREATE src/app/components/header/header.component.ts (215 bytes)

root@ldpda089 /gofiles/src/angular/first-ng-all  (main)$ ng g c home
CREATE src/app/home/home.component.scss (0 bytes)
CREATE src/app/home/home.component.html (19 bytes)
CREATE src/app/home/home.component.spec.ts (578 bytes)
CREATE src/app/home/home.component.ts (207 bytes)
