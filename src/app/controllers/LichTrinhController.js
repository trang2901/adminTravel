const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;

class LichTrinhController {
    // [GET] /LichTrinh
    show(req, res) {

    }

    // // [GET] /LichTrinh/:slug
    // detail(req, res) {
    //     LichTrinh.find({ _id: req.params.id })
    //         .populate('id_dia_diem')
    //         .lean()
    //         .then(LichTrinhs => res.json(LichTrinhs))
    //         .catch(err => {
    //             message: err
    //         });
    // }

    //[POST] /LichTrinh
    create(req, res) {
        const tour= req.params.tourSlug;
        axios
            .post(apiLink + 'lichtrinh', req.body)
            .then(data => {
                const idLichTrinh = data.data['_id'];
                axios
                    .get(apiLink + "tour/" + tour)
                    .then(data => {
                        let tour=data.data;
                        tour.lich_trinh.push(idLichTrinh);
                        axios
                            .put(apiLink+'tour/'+tour['_id'],tour)
                            .then(result=>{
                                res.redirect('/tour/'+tour.slug);
                            })
                            .catch(err => res.json(err))
                    })
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err));
    }

    // [PUT] /LichTrinh/:id
    update(req, res) {
        let idLichTrinh=req.params.id;
        axios
            .put(apiLink + "lichtrinh/"+idLichTrinh, req.body)
            .then(data => {
                // handle success
                res.redirect('/tour/'+req.query['_tour']);
            })
            .catch(err => res.json(err))
    }

    // [DELETE] /LichTrinh/:id
    delete(req, res) {
        axios
            .delete(apiLink + 'lichtrinh/' + req.params.id)
            .then(data => {
                res.redirect('back');
            });
    }
}

module.exports = new LichTrinhController;