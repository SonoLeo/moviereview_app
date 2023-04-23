# Simple Movie CRUD App

This is a simple CRUD application that gets, writes, edits and deletes data from a MySQL database. It is made using React.js as the front-end framework and Node.js for the back-end.

![2023-04-23 16_26_24-favicon ico - moviestore_app - Visual Studio Code](https://user-images.githubusercontent.com/40718733/233845797-34eb3077-49ab-4bad-8023-52515f51b75a.png)

## Installation

Use the package manager npm to install the dependencies, both in the server and client.

```bash
npm install
```

## Usage

The app uses MySQL as its database, so you're going to have to change the settings in the server according to your environment. The schema for the database is in the project repository in the folder _schema_

```javascript
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "moviedb",
});
```

The server uses the port 3001. This can be changed if you are already using the port for another service

```javascript
const PORT = 3001;
```

The command both for running the client and server is:

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.
