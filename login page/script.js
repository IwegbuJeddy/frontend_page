

function show_login () {
    document.querySelector('#omnibox').style.display = 'block';
    document.querySelector('#omnibox').style.transition = '2s ease-in';

       

}
function hide_login () {
    document.querySelector('#omnibox').style.display = 'none';
    document.querySelector('#omnibox').style.animation = '2s ease-in';
}

function validate () {
    first_name = document.querySelector('#firstnm').value;
    last_nm = document.querySelector('#lastnm').value;
    email = document.querySelector('#email');
    pwd1 = document.querySelector('#pwd1').value;
    pwd2 = document.querySelector('#pwd2').value;

if (first_name.length == 0 ) {
    alert('First name should not be empty !');
    }
if (last_nm.length == 0) {
    alert('Last name should not be empty !');

}
if (pwd1 != pwd2) {
    alert('Passwords do not match !');

} 
if (pwd1.length < 8) {
    alert('Password is too short. A good password should have a length of 8 characters');

}
if (pwd2.length < 8) {
    alert('Password is too short. A good password should have a length of 8 characters');

}
else {
 alert('Sign up successful! Welcome' + ' ' + last_nm);
}
};