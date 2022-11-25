const tourRouter=require('./tour');
const lichTrinhRouter=require('./lichTrinh');
const diaDiemRouter=require('./diaDiem');
const adminRouter=require('./admin');
const huongDanVienRouter=require('./huongDanVien');
const khachHangRouter=require('./khachHang');
const dashBoardRouter=require('./dashBoard');
const thanhToanRouter=require('./thanhToan');
const kyThanhToanRouter=require('./kyThanhToan');
const loginRouter=require('./login');
const path=require('path');
const middleware=require('../helpers/middleware');
const requiresLogin=middleware.requiresLogin;



function route(app){
    app.use('/login',loginRouter);
    app.use('/tour',requiresLogin,tourRouter);
    app.use('/lichtrinh',requiresLogin,lichTrinhRouter);
    app.use('/diadiem',requiresLogin,diaDiemRouter);
    app.use('/admin',requiresLogin,adminRouter);
    app.use('/huongDanVien',requiresLogin,huongDanVienRouter);
    app.use('/khachHang',requiresLogin,khachHangRouter);
    app.use('/',requiresLogin,dashBoardRouter);
    app.use('/thanhtoan',requiresLogin,thanhToanRouter);
    app.use('/kyThanhtoan',requiresLogin,kyThanhToanRouter);
    app.get('*',(req,res)=>res.render('404'));
}

module.exports=route;