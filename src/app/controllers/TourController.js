const axios = require("axios");
require('dotenv/config');
const apiLink = process.env.RESTFULL_API;

class TourController {
  // [GET] /tour
  show(req, res) {
    axios
      .get(apiLink + "tour")
      .then(data => {
        // handle success
        const tours = data.data;
        res.render('tours/tourCard', { apiLink, tours })
      })
      .catch(err => console.log(err))
  }

  // [GET] /tour/:slug
  detail(req, res) {
    axios
      .get(apiLink + "tour/" + req.params.slug)
      .then(data => {
        // handle success
        res.render('tours/tourDetail', { tour: data.data })
      })
      .catch(err => res.json(err))
  }

  // [GET] /tour/addTourForm
  addTourForm(req, res) {
    axios
      .get(apiLink + "huongdanvien")
      .then(data => {
        // handle success
        res.render('tours/addTourForm', { huongdanviens: data.data })
      })
      .catch(err => res.json(err))
  }

  // [GET] /tour/addLichTrinhForm
  addLichTrinhForm(req, res) {
    axios
      .get(apiLink + "diadiem")
      .then(data => {
        // handle success
        res.render('tours/addLichTrinhForm', { diadiems: data.data, tourSlug: req.params.slug })
      })
      .catch(err => res.json(err))
  }

  // [GET] /tour/updateInfoForm?_slug
  updateInfoForm(req, res) {
    Promise.all([
      axios
        .get(apiLink + "tour/" + req.query['_slug']),
      axios
        .get(apiLink + "huongdanvien")
    ])
      .then(([data, huongdanviens]) => {
        res.render('tours/updateInfoForm', { tour: data.data, huongdanviens: huongdanviens.data })
      })
      .catch(err => res.json(err))

  }
  // [GET] /tour/updateLichTrinhForm?_id
  updateLichTrinhForm(req, res) {
    let tourSlug = req.query['_tour'];
    Promise.all([
      axios
        .get(apiLink + "lichtrinh/" + req.query['_id']),
      axios
        .get(apiLink + "diadiem")
    ])
      .then(([data, diadiems]) => {
        res.render('tours/updateLichTrinhForm', { lichtrinh: data.data, diadiems: diadiems.data, tourSlug })
      })
      .catch(err => res.json(err))
  }

  // [POST] /tour
  create(req, res) {
    axios
      .post(apiLink + "tour", req.body)
      .then(data => {
        // handle success
        res.redirect('/tour');
      })
      .catch(err => res.json(err))
  }
  
  // [PATCH] /tour/:id
  update(req, res) {
    axios
      .patch(apiLink + "tour/"+req.params.id, req.body)
      .then(data => {
        // handle success
        res.redirect('/tour/'+req.query['_tour']);
      })
      .catch(err => res.json(err))
  }

  // [DELETE] /tour/:id
  delete(req, res) {
    axios
      .delete(apiLink + 'tour/' + req.params.id)
      .then(data => {
        res.redirect('/tour');
      });
  }
}

module.exports = new TourController();
