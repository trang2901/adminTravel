const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;

class ThanhToanController {
    // [GET] /ThanhToan
    show(req, res) {
        axios
            .get(apiLink + "thanhtoan")
            .then(data => {
                // handle success
                res.render('thanhToan/thanhToanTable', { apiLink, thanhtoans: data.data })
            })
            .catch(err => console.log(err))
    }

    // [GET] /ThanhToan/:id
    detail(req, res) {
        axios
            .get(apiLink + "thanhtoan/" + req.params.id)
            .then(data => {
                let thanhToan = data.data;
                console.log('id tour:', thanhToan.id_tour._id)
                console.log('du khach:', thanhToan.id_tour.du_khach)
                console.log('du khách trong thanh toán:', thanhToan.du_khach);

                const dukhachTT = thanhToan.du_khach;
                
                    axios
                    .patch(apiLink + "tour/" + thanhToan.id_tour._id, {
                        du_khach: [
                            ...dukhachTT.map((it)=>it),
                            ...thanhToan.id_tour.du_khach.map((item)=>item)
                          ], 
                    })
                    .then(data => {
                        console.log('>>>>>>>>>>>>> Thành công!!!!!!!!!!!!!'
                        )
                    })
                
                
                // handle success
                if (req.query['_action'] === 'duyet') {
                    thanhToan.trang_thai_duyet = 'ĐÃ DUYỆT';
                    thanhToan.nguoi_duyet = req.session.idAdmin;
                    axios
                        .put(apiLink + "thanhtoan/" + req.params.id, thanhToan)
                        .then(data => {
                            res.redirect('back');
                        })
                        .catch(err => console.log(err))
                    }
                    else
                        res.render('thanhToan/kyThanhToanTable', { apiLink, thanhtoan: data.data })
            })
            .catch(err => console.log(err))
    }

    // //[POST] /ThanhToan
    // create(req, res) {
    //     const ThanhToan = new ThanhToan(req.body);
    //     ThanhToan.save()
    //         .then(data => {
    //             res.json(data);
    //         })
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // // [PUT] /ThanhToan/:id
    // update(req, res) {
    //     ThanhToan.findByIdAndUpdate(req.params.id, req.body)
    //         .lean()
    //         .then(dataUpdate => res.json(dataUpdate))
    //         .catch(err => {
    //             res.json({
    //                 message: err
    //             });
    //         })
    // }

    // [DELETE] /ThanhToan/:id
    delete(req, res) {
        axios
            .get(apiLink + 'thanhtoan/' + req.params.id)
            .then(({ data }) => {
                const arrDuKhach = data.du_khach;
                console.log('data', arrDuKhach);

                axios
                    .get(apiLink + 'dukhach/')
                    .then(({ data }) => {
                        for (let i = 0; i < arrDuKhach.length; i++) {
                            for (let it = 0; it < data.length; it++) {
                                if (data[it]._id === arrDuKhach[i]) {
                                    axios
                                        .delete(apiLink + 'dukhach/' + data[it]._id)
                                        .then(data => {
                                            // console.log('>>>>>>>>>>>>>>>>>>>>>>xóa thành công')
                                        })
                                }
                            }
                        }
                        axios
                            .delete(apiLink + 'thanhtoan/' + req.params.id)
                            .then(data => {
                                res.redirect('/thanhtoan');
                            });
                    })
            })

    }
}

module.exports = new ThanhToanController;