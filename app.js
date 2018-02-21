function validate() {
    if(firstnameValidate() && lastnameValidate() && emailValidate() && phoneValidate())
    {
        return true;
    }
    else {
        return false;
    }
}
function firstnameValidate(){
    if(document.getElementById('firstname').value != "") {
        return true;
    }
    else{
        return false;
    }
}
function lastnameValidate(){
    if(document.getElementById('lastname').value != "") {
        return true;
    }
    else{
        return false;
    }
}
function emailValidate(input) {
    if(document.getElementById('email').value != "" && document.getElementById('confirmEmail').value !=""){
    if (document.getElementById('confirmEmail').value != document.getElementById('email').value) {
        input.setCustomValidity('Email mismatch.');
        return false;
    } else {
        return true;
    }}
    else {
       return false;
    }
}
function phoneValidate() {
    if(document.getElementById('phone').value != ""){
        return true;
    }
    else {
        return false;
    }
}
function getAjaxData() {
    $.get( "https://reqres.in/api/users/10", function(data) {
        document.write(JSON.stringify(data));
    });
    alert('Registered Successfully');
}

function submitForm() {
    if(validate()){
            getAjaxData();
        }
        else {
        console.log('error');
    }
}