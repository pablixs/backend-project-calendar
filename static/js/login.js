let labelUser = document.getElementById('username-label')
let inputUser = document.getElementById('username');
let labelPassword = document.getElementById('password-label')
let inputPassword = document.getElementById('password');

window.addEventListener('click',function(e){
    
    if (inputUser.contains(e.target)){
        labelUser.classList.add("label-focus")
    }
    

    if (inputPassword.contains(e.target)){
        labelPassword.classList.add("label-focus")
    }
});

