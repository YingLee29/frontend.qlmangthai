/* Gửi data lên ggsheet */
document.querySelector('#submit_form').onsubmit = function(e){
    e.preventDefault();

    //Truy cap vao thanh phan HTML
    let fullNameOj = document.querySelector('input[name="fullname"]');
    let phoneOj = document.querySelector('input[name="phone"]');
    let addressOj = document.querySelector('input[name="address"]');
    let insuranceOj = document.querySelector('input[name="insurance"]');
    let dateOj = document.querySelector('input[name="date"]');
     //Lấy dữ liệu
    let fullName = fullNameOj.value;
    let phone = phoneOj.value;
    let address = addressOj.value;
    let insurance = insuranceOj.value;
    let date = dateOj.value;
    
    let error = {};
    if (fullName.trim()=='')
    {
        error['fullName'] = 'Họ và tên không được để trống';
        fullNameOj.parentElement.querySelector('.required').innerText = error['fullName'];
    }
}