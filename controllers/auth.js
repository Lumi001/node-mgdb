const User = require('../models/user');

exports.getLogin = (req, res, next) => {
  res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: req.session.isLoggedIn
  });
     
  };

exports.postLogin = (req, res, next) => { 
  User.findById('62e05d960443ee3f00bd55eb')
  .then(user => {
    req.session.isLoggedIn = true;
    req.session.user = user;
    req.session.save(err => {
      // console.log(err);
      res.redirect('/');    
    });  
  })
  .catch(err => console.log(err)); 
};

exports.postLogout = (req, res, next) => {
  req.session.destroy((err) => {
    // console.log(err);
    res.redirect('/'); 
  })
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'SignUp',
    isAuthenticated: req.session.isLoggedIn
  });
     
  };
