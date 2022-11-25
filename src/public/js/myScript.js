//Active navbar base url
setNavigation();

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);

    $("li.menu-item a").each(function () {
        var href = $(this).attr('href');
        if (path.substring(0, href.length) === href && href.length > 1) {
            $(this).closest('li').addClass('active');
        }
        if (path === '') {
            $("#dashboard-menu-item").addClass('active');
        }
    });
};

//Handle Delete
document.addEventListener('DOMContentLoaded', function () {
    var Id, collection;
    var btnDelete = document.querySelector('#btn-delete');
    var deleteForm = document.forms['delete-form'];

    $('#modal-delete').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Button that triggered the modal
        Id = button.data('id'); // Extract info from data-* attributes
        collection = button.data('collection'); // Extract info from data-* attributes
        var name = button.data('name');
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        var modal = $(this);
        modal.find('.modal-body').text('Bạn có chắc chắn muốn xóa ' + name + ' không?');

    });

    //Handle click delete button
    if (btnDelete !== null) {
        btnDelete.onclick = () => {
            deleteForm.action = "/"+collection+'/' + Id + '?_method=DELETE';
            deleteForm.submit();
        }
    }

});

const updateInfoAdminForm=document.querySelector('#update-info-admin');
if(updateInfoAdminForm!==null){
    updateInfoAdminForm.addEventListener('submit',(e)=>{
        const password=document.querySelector('#password');
        const passwordAgain=document.querySelector('#password-again');
    
        if(password.value!==passwordAgain.value){
            alert('Nhập lại mật khẩu và mật khẩu không trùng nhau!!!');
            e.preventDefault();
        }
    })
}