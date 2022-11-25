const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;

class HuongDanVienController {

    // [GET] /huongdanvien
    show(req, res) {
        axios
            .get(apiLink + "huongdanvien")
            .then(data => {
                // handle success
                res.render('huongDanVien/huongDanVienTable', { apiLink, huongdanviens: data.data })
            })
            .catch(err => console.log(err))
    }

    // // [GET] /huongdanvien/id
    // detail(req, res) {
    //     HuongDanVien.findById(req.params.id)
    //         .populate('id_tai_khoan')
    //         .lean()
    //         .then(hdv => res.json(hdv))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    // [POST] /huongdanvien
    create(req, res) {
        let username=req.body.username;
        let password=req.body.password
        axios
            .post(apiLink + "taikhoan", {username,password})
            .then(data => {
                // Create huongdanvien after create taikhoan
                console.log(data.data);
                req.body.id_tai_khoan=data.data['_id'];
                axios
                    .post(apiLink + "huongdanvien", req.body)
                    .then(data => {
                        // handle success
                        res.redirect('/huongdanvien');
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    }

    // // [PUT] /huongdanvien/:id
    // update(req,res){
    //     HuongDanVien.findByIdAndUpdate(req.params.id,req.body)
    //         .lean()
    //         .then(dataUpdate=>res.json(dataUpdate))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // [DELETE] /huongdanvien/:id
    delete(req, res) {
        axios
            .delete(apiLink + 'huongdanvien/' + req.params.id)
            .then(data => {
                res.redirect('/huongdanvien');
            });
    }
}

module.exports = new HuongDanVienController;