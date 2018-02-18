# SocialFit

Facebook clone with a health / fitness theme

![ScreenShot](client/assets/screenshot.png)

The premise of this project is to fully explore isomorphic React concepts, using Redux to store the application's state with a focus on utilizing functional programming concepts and writing clean, maintenable, and testable code. 

### Core concepts explored and TODOS
Core Concepts
* Using Express.js for back-end Node.js framework
* Using Express for server-side routing and react-router for client-side routing
* Constructing app isomorphically so that server can render React components itself if a user manually types in a page URL
* Use Passport.js to implement local authentication strategy and JSON Web Tokens to persist sessions
* When registering, users are validated server-side and stored; passwords encrypted with bcrypt package
* Connects to MongoDB database to create, read, update, and delete MongoDB documents corresponding to posts and comments
* Use Redux architecture to keep application-wide state that can be read and updated through action-creators / reducers
* Uses ES6 features, transpiled by Babel
* Bundled by webpack with loaders such as babel, style-loader, postcss-loader, url-loader, json-loader
* Bundled into chunks that are broken up by routes that are lazily loaded to speed up initial load time
* Includes hot-reloading and redux devtools for development
* ESLint used to keep clean, consistent coding style
* prop-types package used to typecheck React component props
* Using Jest snapshot tests for regression testing
* File structure: code separated into client and server with a MVC structure. Server is separated into Model and Controller and Client organized by modules represents View.

Major TODOS
* Create a better layout for dashboard, walls, and newsfeed / Clean up UI
* Make sure possible errors are handled and add error messages to UI
* Allow posting of photos, videos, and emojis
* Create update profile page to allow users to edit details of their profile
* Add 3rd party authentication, and Reset Password functionality

### Run on your machine

To run this, a MongoDB database must be created, then a /server/config/config.js file must be created to export config settings:

```
const config = {
  // Database connection information
  mongoURL: 'your_mongo_url',
  // Setting port for server
  port: process.env.PORT || 8000,
  // Secret key for JWT signing and encryption
  secret: 'your_secret_word',
};
```
Now, you can run by using command lines npm install and npm start!