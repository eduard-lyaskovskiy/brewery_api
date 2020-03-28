![](https://i.imgur.com/4TVXH1K.png)

# Todos:
  - [x] Write a simple server on Express
  - [x] A request to any URL on this server will give one page with data
  - [x] Create a Brewery class with fields that are in each brewery from the API
  - [x] Get the list of breweries through the API(https://api.openbrewerydb.org/) and create an array of Brewery objects based on it.
  - [x] Create an object on the basis of the received data, in which the state names will act as the keys and an array of breweries, which are located in this state, as values.
  - [x] Display in the HTTP reply for each state a list of addresses of breweries that are in that state.
  - [x] Create a class method getFullAddress, which for the brewery will return its full address (postal code, country, state, city, street).
  - [x] Filter the list of breweries, sift out all microbreweries (type = 'micro').
  - [x] Output the table from filtered breweries into HTTP reply. Columns of the table: ID, name, full address, telephone, website address.

## Installation

Brewery requires [Node.js](https://nodejs.org/) to run.

Install the all dependencies and start the server.

```sh
$ cd Beer
$ npm install -d
$ nodemon
```
```sh
app started on url http://localhost:3000/
```

### Tech

Dillinger uses a number of open source projects to work properly:

* [Express] – Fast, unopinionated, minimalist web framework for Node.js
* [Pug](https://pugjs.org) – robust, elegant, feature rich template engine for Node.js 
* [request-promise](https://www.npmjs.com/package/request-promise) – The simplified HTTP request client 'request' with Promise support. Powered by Bluebird.
* [Twitter Bootstrap] – great UI boilerplate for modern web apps
* [nodemon](https://www.npmjs.com/package/nodemon) – helps develop node.js based applications by automatically restarting the node application.

![](https://i.imgur.com/I9iYRqD.png)