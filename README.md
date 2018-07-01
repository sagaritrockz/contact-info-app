# Contact Book

Contact Book is an application to store your basic contact details like name, phone number, email. It also allows to edit and delete contacts. On top of that, it has feature to mark a contact's status whether it is active or not.


## Features

* Create new contact
* Edit contact
* Delete contact
* Constants which can be used for localization(will need a bit modification though)
* Theme based approach for easy styling the entire application


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them


Nodejs package manager
```shell
npm
```

### Installing

A step by step series of commands that tell you how to get a development env running

After installing npm, run the following command in the root  directory of the application.
```
npm install
```

After installing all the dependencies, make the build using following command

```
npm run build
```

once the build is completed. Spin the server with following command.

```
npm start
```

## Unit testing
To run unit test cases separately, use following command

```
karma start
```

## Deployment

For deployment, upload all the files from the ./dist directory to the server, along with angularjs, jquery and materializecss packages from node_modules.

## Built With

* [angularjs] - The javascript framework used
* [npm] - Dependency Management
* [materializecss] - Front-end framework based on Material Design
* [jasmine-karma] - unit testing framework for angularjs applications


## Future Enhancements

* Saving and retrieving data from DB.
* Pagination.
* Capture more details about contact. 


## Author

* **Sagar Patel** - *Initial work* - (https://github.com/sagaritrockz)
