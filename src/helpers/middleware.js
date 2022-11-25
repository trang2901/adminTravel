module.exports={
    requiresLogin: (req, res, next)=> {
        if (req.session && req.session.idAdmin) {
          return next();
        } else {
          res.redirect('/login/login');
        }
    }
}