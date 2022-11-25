const axios = require('axios');
require('dotenv/config')
const apiLink = process.env.RESTFULL_API;
const tags=[
    'Hà Nội',
    'Đà Lạt',
    'TP HCM',
    'Cần Thơ',
    'Vũng Tàu',
    'Nha Trang',
    'Sa pa',
    'Lào Cai',
    'Ninh Bình',
    'Hạ Long',
    'Quảng Ninh',
    'Hà Giang',
    'Vịnh Hạ Long',
    'Cao Bằng',
    'Đà Nẵng',
    'Sơn La',
    'Hải Phòng',
    'Bắc Kan',
    'Quảng Ngãi',
    'Quảng Nam',
    'Quy Nhơn',
    'Đắk Lắk',
    'Huế',
    'Quảng Bình',
    'Quảng Trị',
    'Phú Yên',
    'Gia Lai',
    'Kon Tum',
    'Bình Thuận',
    'An Giang',
    'Sóc Trăng',
    'Bạc Liêu',
    'Cà Mau',
    'Tiền Giang',
    'Bến Tre',
    'Kiên Giang',
    'Đồng Nai',
    'Tây Ninh',
    'Củ Chi',
]
class DiaDiemController {

    // [GET] /diadiem
    show(req, res) {
        axios
            .get(apiLink + "diadiem")
            .then(data => {
                // handle success
                res.render('diaDiem/diaDiemCard', { apiLink, diadiems: data.data })

            })
            .catch(err => console.log(err))
    }

    // [GET] /diadiem/:slug
    detail(req, res) {
        axios
            .get(apiLink + 'diadiem/' + req.params.slug)
            .then(data => {
                // handle success
                data.data.mo_ta = data.data.mo_ta.replace(/(?:\r\n|\r|\n)/g, '<br>');
                res.render('diaDiem/diaDiemdetail', { apiLink, diadiem: data.data });

            })
            .catch(err => console.log(err));
    }
    // [GET] /diadiem/addForm
    addForm(req, res) {
        res.render('diaDiem/addForm',{tags});
    }
    
    // [GET] /diadiem/updateForm
    updateForm(req, res) {
        axios
            .get(apiLink + 'diadiem/' + req.params.slug)
            .then(data => {
                // handle success
                res.render('diaDiem/updateForm', { apiLink, diadiem: data.data ,tags});
            })
            .catch(err => console.log(err));
    }

    //[POST] /diadiem
    create(req, res) {
        req.body.hinh = "/img/" + req.body.hinh;
        axios
            .post(apiLink + "diadiem", req.body)
            .then(data => {
                // handle success
                res.redirect('/diadiem');
            })
            .catch(err => res.json(err));
    }

    // [PUT] /diadiem/:id
    update(req,res){
        let idDiaDiem=req.params.id;
        if(req.body.hinh==''){
            req.body.hinh=req.body.hinhDefault;
        }
        else{
            req.body.hinh='/img/'+req.body.hinh;
        }
        axios
            .put(apiLink + "diadiem/"+idDiaDiem, req.body)
            .then(data => {
                // handle success
                res.redirect('/diadiem/'+data.data.slug);
            })
            .catch(err => res.json(err));
    }

    // [DELETE] /diadiem/:id
    delete(req, res) {
        axios
            .delete(apiLink + 'diadiem/' + req.params.id)
            .then(data => {
                res.redirect('/diadiem');
            });
    }
}

module.exports = new DiaDiemController;