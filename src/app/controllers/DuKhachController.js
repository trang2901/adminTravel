const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;

class DuKhachController {

    show(req, res) {
        axios
            .get(apiLink + "dukhach/")
            .then(data => {
            })
            .catch(err => console.log(err))
    }

    // [DELETE] /huongdanvien/:id
    delete(req, res) {
        axios
            .delete(apiLink + 'dukhach/' + req.params.id)
            .then(data => {
                // res.redirect('/huongdanvien');
            });
    }
}

module.exports = new DuKhachController;