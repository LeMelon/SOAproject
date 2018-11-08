# SOAproject
## I. Configuration and deployment description :

### a. Configuration :
- IDE : WebStorm
- Language : Angular CLI 7.0.2
- Server : serverless / not used
- Proxy : proxy.conf.json (Angular proxy)

### b. Deployment :
- For localhost, open a terminal and write :
```sh
cd AngularCLISOA
ng serve --proxy-config proxy.conf.json
```



## II. Design and implementation :

Angular CLI classic architecture with app.component used to initialise the header of the web page and calling the other components.
Two components have been made :
- funfacts : will generate random facts about cats and have a function to reload.
- petfinder : will get a list of cat species and launch a research on the one selected by the user.
The app.component will generate random cat pictures at each launch.

The proxy configuration is needed for the use of localhost as Cores problems will occur without it :
it will change the "Origin" of the request to be accepted by the APIs.

The VPN is needed only for the display of pictures, the other datas will be displayed without problem.

## III. Required XML files :

Only one API using XML format.
The XSD,XSL and XSLT will be found on the xml directory :
```sh
cd xml
```
