## Prerequisites

Install  nodejs(latest stable build)

## Folder Acknowledgement

routes: all routes define here.
controller: it is middleware of routes and services.
services: put all business login here.
daos: put all database related functionality here.

sequence of above folder for a api 

1.routes -> 2.controllers -> 3.services -> 4.daos

config.js: put all configurations related to project here.

##Install

```
npm install
```

##Run

On every OS you can set some environment variable to override the config settings, this is usefull when you want to deploy your project into a production area or change the app ports, there are many different ways to set an environment variable and then run you node app, here some different ways for each OS: 


###Linux/Unix/OSX

```
PORT=8080 && NODE_ENV=production && node start
```

or

```
export PORT=8080
node start
```

###Windows:

```
set PORT=8080 && set NODE_ENV=production && node start
```

or In Windows PowerShell

```
$env:PORT = 1234
node start
```

##Test

```
node test
```
