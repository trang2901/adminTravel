const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;
class KhachHangController {

    // [GET] /khachhang
    show(req, res) {
       axios
            .get(apiLink + "khachhang")
            .then(data => {
                // handle success
                res.render('khachHang/khachHangTable', { apiLink, khachhangs: data.data })
            })
            .catch(err => console.log(err))
    }

    // // [GET] /khachhang/:id
    // detail(req, res) {
    //     KhachHang.findById(req.params.id)
    //         .populate('id_tai_khoan')
    //         .lean()
    //         .then(kh => res.json(kh))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    // //[POST] /khachhang
    // create(req, res) {
    //     const kh = new KhachHang(req.body);
    //     kh.save()
    //         .then(data => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [PUT] /khachhang/:id
    // update(req,res){
    //     KhachHang.findByIdAndUpdate(req.params.id,req.body)
    //         .lean()
    //         .then(dataUpdate=>res.json(dataUpdate))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // [DELETE] /khachhang/:id
    delete(req,res){
        axios
        .delete(apiLink+'khachhang/'+req.params.id)
        .then(data=>{
            res.redirect('/khachhang');
        });
    }
}

module.exports = new KhachHangController;