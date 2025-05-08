let formBtn = document.querySelector('.btnForm');
let name = document.querySelector('.name');
let email = document.querySelector('.email');
let phone = document.querySelector('.phone');
formBtn.addEventListener('click', function () {
    if (name.value.length > 0 && email.value.includes('@gmail.com') === true && phone.value.length > 0) {
        name.style.border = '1px solid #99FF99';
        name.style.boxShadow = '0px 0px 20px 1px rgba(100, 255, 100, 0.3)';
        email.style.border = '1px solid #99FF99';
        email.style.boxShadow = '0px 0px 20px 1px rgba(100, 255, 100, 0.3)';
        phone.style.border = '1px solid #99FF99';
        phone.style.boxShadow = '0px 0px 20px 1px rgba(100, 255, 100, 0.3)';
    } else {
        name.style.border = '1px solid red';
        name.style.boxShadow= '0px 0px 20px 1px rgba(255, 0, 0, 0.3)';
        email.style.border = '1px solid red';
        email.style.boxShadow= '0px 0px 20px 1px rgba(255, 0, 0, 0.3)';
        phone.style.border = '1px solid red';
        phone.style.boxShadow= '0px 0px 20px 1px rgba(255, 0, 0, 0.3)';
    }

    if (name.value.length > 0) {
        name.style.border = '1px solid #99FF99';
        name.style.boxShadow = '0px 0px 20px 1px rgba(100, 255, 100, 0.3)';
     } else {
        name.style.border = '1px solid red';
        name.style.boxShadow= '0px 0px 20px 1px rgba(255, 0, 0, 0.3)';
     }

    if (email.value.includes('@gmail.com')) {email.style.border = '1px solid #99FF99';
        email.style.boxShadow = '0px 0px 20px 1px rgba(100, 255, 100, 0.3)';
    }
        else {
            email.style.border = '1px solid red';
            email.style.boxShadow= '0px 0px 20px 1px rgba(255, 0, 0, 0.3)';
        }

    if (phone.value.length > 0) {
        phone.style.border = '1px solid #99FF99';
        phone.style.boxShadow = '0px 0px 20px 1px rgba(100, 255, 100, 0.3)';
    } else {
        phone.style.border = '1px solid red';
        phone.style.boxShadow= '0px 0px 20px 1px rgba(255, 0, 0, 0.3)';
    }
})
