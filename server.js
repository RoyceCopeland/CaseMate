const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const db = require('./config');
const request = require("request");
const passport = require('passport');
const PORT = process.env.PORT || 3001;
const session = require("express-session");
const schedule = require('node-schedule');
const resetUserLoginStatus = require('./controllers/resetUserLoginStatus');

// connect to the database and load models
// require('./models').connect(db.dbUri);
mongoose.Promise = global.Promise;
mongoose.connect(
	process.env.MONGODB_URI || "mongodb://user:password@ds113505.mlab.com:13505/heroku_7zz37k99",
	{
		useMongoClient: true
	}	
);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));


// pass the authorization checker middleware
// const authCheckMiddleware = require('./middleware/auth-check');
// app.use('/api', authCheckMiddleware);


// Add routes, both API and view
app.use(routes);
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "padme amidala skywalker", 
				  resave: true, 
				  saveUninitialized: true,
				  cookie: {
				  	 secure: 'auto',
				  	 maxAge: 5*24*60*60*1000
				  } }));
app.use(passport.initialize());
app.use(passport.session()); 

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

//schedule daily reset of loggedin status for user model
const j = schedule.scheduleJob({hour: 0, minute: 0}, function(){
  resetUserLoginStatus.reset( function() {
  	console.log(new Date(), 'Logged In Status Reset');
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
