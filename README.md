# Nodejs Expressjs MongoDB Ready-to-use API Project Structure

A ready-to-use boilerplate for REST API Development with Node.js, Express, and MongoDB

## Getting started

This project will run on **NodeJs** using **MongoDB** as database. I had tried to maintain the code structure easy as any beginner can also adopt the flow and start building an API. Project is open for suggestions, Bug reports and pull requests.

## Advertise for Job/Work Contract

I am open for a good job or work contract. You can contact me directly on my email ([turhansit@gmail.com](mailto:turhansit@gmail.com "turhansit@gmail.com")) or you can download my CV from my personal [website](https://github.com/turhansit/).

## Software Requirements

- Node.js **v14.17.0**
- MongoDB **v4.4.6**

## How to install

### Using Git (recommended)

1.  Clone the project from github. Change "myproject" to your project name.

```bash
git clone https://github.com/turhansit/rest-api-nodejs-mongodb.git ./myproject
```

### Using manual download ZIP

1.  Download repository
2.  Uncompress to your desired directory

### Install npm dependencies after installing (Git or manual download)

```bash
cd myproject
npm install
```

### Setting up environments

1.  You will find a file named `.env` on root directory of project.
2.  Change the values of the file to your environment. Helpful comments added to `.env` file to understand the constants.

## Project structure

```sh
.
├── app.js
├── package.json
├── package-lock.json
├── .env
├── models
│   ├── post.js
├── routes
│   ├── post.js
```

## How to run

### Running API server locally

```bash
npm run dev
```

You will know server is running by checking the output of the command `npm run dev`

```bash
Connected to mongodb:db_connect
App is running ...

Press CTRL + C to stop the process.
```

**Note:** `db_connect` will be your MongoDB connection string.

### Creating new models

If you need to add more models to the project just create a new file in `/models/` and use them in the controllers.

### Creating new routes

If you need to add more routes to the project just create a new file in `/routes/` and add it in `/routes/post.js` it will be loaded dynamically.

