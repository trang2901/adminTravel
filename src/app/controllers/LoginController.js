const axios = require('axios');
require('dotenv/config');
const apiLink = process.env.RESTFULL_API;

class LoginController {
    // [GET] /Login/login
    showLogin(req, res) {
        res.render('account/login');
    }
    // [GET] /Login/logout
    logout(req, res) {
        if (req.session) {
            // delete session object
            req.session.destroy(function(err) {
              if(err) {
                return next(err);
              } else {
                return res.redirect('/');
              }
            });
        }
    }
    // [POST] /Login/login
    login(req, res) {
        axios
            .get(apiLink + "admin")
            .then(data => {
                let admins=data.data;
                let admin=admins.find(admin=>admin.id_tai_khoan.username===req.body.username&&
                    admin.id_tai_khoan.password===req.body.password);
                if(admin){
                    req.session.idAdmin=admin['_id'];
                    res.redirect('/');
                }
                else{
                    res.redirect('/Login/login');
                }
                
            })
            .catch(err => console.log(err))
    }

}

module.exports = new LoginController;