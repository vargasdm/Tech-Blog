# Tech-Blog

## Description

The motivation for this project was to create a full-stack application that utilized sessions, cookies, and handlebars.js. The purpose of this project  was to create a CMS-style blog site. This way the users can I can publish articles, blog posts, and thier thoughts and opinions.


During this project I learned: 
- how to install and implement dotenv to hide my sql log in credentials
- how to sync sequelize models to a MYSQL database
- how to formulate API routes using all CRUDE operators
- how to use the express-session and connect-session-sequelize packages in order to add authentication.
- how to use the bcrypt package dependency to encrypt passwords created by the user
- how to implement try catch operators to make code more dry
- how to implement async await functions so that our code runs more smoothly and eliminates the use for .then
- how to use the express-handlebars package dependency in order to use handlebars.js templates to render data

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

First, you will need to clone this repository to your local machine. The repository should already contain the package.json file as well as the package-lock.json file. This application requires you to have node.js version 16.18 and you can read how to install the correct version at https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs. This application also requires the third-party packages express, sequelize, mysql2, dotenv, connect-session-sequelize, bcrypt, express-handlebars, and express-session. It can be installed by opening the index.js terminal and entering npm i. You will be able to check the package.jason file and find the dependencies. Lastly, to access the sql database you will need to add your log in credentials to the the .env file. Heroku is used to deploy this application, but it can be deployed using any service you choose.

To install the packages check these resources:
- https://sequelize.org/docs/v6/getting-started/
- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/connect-session-sequelize
- https://www.npmjs.com/package/bcrypt
- https://www.npmjs.com/package/express-handlebars
- https://www.npmjs.com/package/express-session

## Usage

This application can be used to view posts and comments from other users as well as create, update, and delete posts of your own. The user will first need to install all of the dependencies using "npm i". Then the user will need to create the blog database. This is done my running "mysql -u root -p" in the console, entering the user's SQL password, and running "source db/schema.sql" in the terminal. The user can then exit mysql. The user must then seed the database by executing the seeds file by entering "npm run seed" in the terminal. The user can then either use "npm run start" to deploy the application using express, or the application can be deployed using Heroku

When the opens the application, they are presented with a hompage that displays navigation for dashboard, home, and login. The user will not eb able to access the dashboard page without logging in  and will be redirected when it is clicked. At the login page the user can sign up to create a profile by adding a username, email, and password tothe form and submitting. The user can now access the post pages and dashboard page. When a user clicks a post, they are shown the post, the post creator's name, the date that the post was created, and the post body. On this page the user has a form that can be used to create a comment on that post. After the user submits the title and body for a comment, the page is refreshed and the created comment is shown. WHen the user access the dashboard page, they are presented withe psots that they have created, as well as a create post button. When the create post button is clicked, the user is brought to a form where they can create a post. When a title and body for a post is submitted, the user is brought to the dashboard page and their post is shown. When the user has a post they have the option to update or delete the post. When the user clicks the delete post button, thay post is deleted and the page is refreshed. WHen the user clicks the update post button, they are taken to an update post form where they can add a new title and body for that post. When the information is submitted, the user is returned to the dashboard page and their update post is shown. Finally when the logout button is pressed, the user is logged out.

The deployed Heroku application can be view at: https://guarded-forest-85262.herokuapp.com/

## Credits

I followed these links and tutorials in the completion of this project:

- https://sequelize.org/
- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/express
- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/connect-session-sequelize
- https://www.npmjs.com/package/bcrypt
- https://www.npmjs.com/package/express-handlebars
- https://www.npmjs.com/package/express-session
- https://handlebarsjs.com/

## License

No licenses were used during this project.
