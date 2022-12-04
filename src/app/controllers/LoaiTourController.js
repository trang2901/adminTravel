const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;

class LoaiTourController {

    show(req, res) {
        axios
            .get(apiLink + "loaitour")
            .then(data => {
                res.render('loaiTour/loaitourTable', { apiLink, loaitours: data.data })
            })
            .catch(err => console.log(err))
    }

    create(req, res) {
                axios
                    .post(apiLink + "loaitour", req.body)
                    .then(data => {
                        // handle success
                        res.redirect('/loaitour');
                    })
                    .catch(err => res.json(err))
            
    }

    // [DELETE] /huongdanvien/:id
    delete(req, res) {
        axios
            .delete(apiLink + 'loaitour/' + req.params.id)
            .then(data => {
                res.redirect('/loaitour');
            });
    }
}

module.exports = new LoaiTourController;