

class TaiKhoanController {
    // [GET] /taikhoan
    show(req, res) {
        res.render('home');
    }
    // // [GET] /taikhoan/:username
    // detail(req, res) {
    //     TaiKhoan.find({ username: req.params.username })
    //         .lean()
    //         .then(acount => res.json(acount))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    // // [POST] /taikhoan
    // create(req, res) {
    //     const tk = new TaiKhoan(req.body);
    //     console.log(tk);
    //     tk.save()
    //         .then(data => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [PUT] /taikhoan/:id
    // update(req,res){
    //     TaiKhoan.findByIdAndUpdate(req.params.id,req.body)
    //         .lean()
    //         .then(tk=>res.json(tk))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [DELETE] /taikhoan/:id
    // delete(req,res){
    //     TaiKhoan.findByIdAndDelete(req.params.id)
    //         .lean()
    //         .then(dataDelete=>res.json(dataDelete))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }
}

module.exports = new TaiKhoanController;