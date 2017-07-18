var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var jwt = require('jsonwebtoken');
var config =  require('./config');
var mongoose = require('mongoose');
var users = require('./app/models/users.js');
var acl = require('express-acl')

//set our port
var port = process.env.PORT || 8000;  //use to create signin and verify tokens
let mongoConnect = mongoose.connect(config.database, {
  useMongoClient: true,
  /* other options */
});
mongoConnect.then(function(res){
  console.log('Successfully connected to mongo: ', config.database);
})
app.set('superSecret', config.secret);

//This will help us get data from a POST
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//use morgan to log requests to the console
app.use(morgan('dev'));

//basic router
app.get('/', function(req, res){
  res.send('hello!! the api is at http://localhost:' + port + '/api');
})

var router = express.Router();

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

//test route to make sure everything is ok
router.get('/', function(req, res){
  res.json({message : 'hooray! welcome to our API'});
});

router.route('/user')
  //create a user using POST
  .post(function(req, res){
    console.log('post called');
    var user = new users();
    user.username = req.body.username; //sets the user name(comes from the request)
    user.email = req.body.email; //sets the email
    user.name = req.body.name; //sets the name
    user.password = req.body.password;//sets the password
    user.role = req.body.role;//sets the role

    //save the user and check for errors
    user.save(function(err){
      if (err)
        res.json({ status : "error", message : "err message" });
      res.json({ status : "ok", data : "unique id of user created by mongo"});
    });
  });



//deleting the userdata by using DELETE
  router.delete('/user/:username', function(req, res){
    users.remove({username : req.params.username}, function(err, userData){
      if(err)
        res.send(err);
      res.json({ message : "Successfully deleted"});
    });
  });

var role;
//all routes of API will happen here
  router.post('/authenticate', function(req, res){
    users.findOne({ username : req.body.username }, function(err, user){
      //finding the user
      console.log(user);
      if(err)
        throw err;
      if(!user){
        res.json({ success : false, message : "Authentication failed!! user not found" });
      }
      else if(user){
        if(user.password != req.body.password){
          res.json({ success : false, message : "Authentication failed!! wrong password" });
        }
        else{
          role = user.role;
          var token = jwt.sign(user, config.secret);
          res.json({
            success : true,
            message : 'Enjoy your token',
            token : token,
            role : role
          });
        }
      }
    });
  });
          //Routing middlewares to verify a token
          router.use(function(req,res,next){

            //check headers, url parameters or post parameters for tokens
            var token = req.body.token || req.query.token || req.headers['x-access-token'];
            console.log('token',token);
            //decode token
            if(token){
              //verifies secret and checks exp
              jwt.verify(token, config.secret, function(err, decoded){
                if (err){
                  return res.json({ success:false, message :'Failed to authenticate token.' });
                }
                else{
                  req.decoded = decoded;
                  req.role = role;
                  next();
                }
              });
            }
            else {
              //if there is no token
              //return an error
              return res.status(403).send({
                success : false,
                message : 'No token provided.'
              });
            }

          });
          router.use(acl.authorize);
          // app.use(acl.authorize);

          //getting details of the user using GET
          app.set('permission', {role: 'user'});
            router.get('/user', function (req, res){
              users.find(function(err, userData){
                if(err)
                  res.send(err);
                res.json({ status : "ok", data : {userData} });
              })
            });

          //getting a single user data
            router.route('/user/:username') //finding by username
              .get(function(req, res){
                users.findOne({username : req.params.username}, user.role, function(err, userData){
                  if(err)
                    res.send(err);
                  res.json(userData);
                });
              })

          //updating the users information by using PUT
          app.set('permission', {role: 'admin'});
            router.route('/user/:username')
              .put(function(req, res ){
                  users.findOne({username : req.params.username}, function(err, userData){
                    console.log('findByUsername called');
                    if(err)
                      res.send(err);
                    userData.name = req.body.name;
                    userData.save(function(err){
                      if(err)
                        res.send(err);
                      res.json({ status : "ok", data : userData._id });
                    });
                  });
                })




//Register routes
//all our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port : ' + port);
