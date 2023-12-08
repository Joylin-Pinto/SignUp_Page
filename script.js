let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let inpErr = document.getElementsByClassName('error-msg');
let Erricon = document.getElementsByClassName('input-icon');
let placeholder = document.getElementsByClassName('placeholder');

function handleonSubmit(event) {
    event.preventDefault();

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Reset styles
    for (let i = 0; i < inpErr.length; i++) {
        inpErr[i].style.display = 'none';
    }

    for (let i = 0; i < Erricon.length; i++) {
        Erricon[i].style.display = 'none';
    }
    email.classList.remove('placeholder');

    // Check for errors
    if (fname.value === "" || lname.value === "" || email.value === "" || pass.value === "") {
        if (fname.value === "") {
            inpErr[0].style.display = 'block';
            Erricon[0].style.display = 'block';
        }

        if (lname.value === "") {
            inpErr[1].style.display = 'block';
            Erricon[1].style.display = 'block';
        }

        if (email.value === "" || !emailRegex.test(email.value)) {
            inpErr[2].style.display = 'block';
            Erricon[2].style.display = 'block';
            email.classList.add('placeholder');
        }

        if (pass.value === "") {
            inpErr[3].style.display = 'block';
            Erricon[3].style.display = 'block';
        }
    } else { 
        alert("Form Submitted")
        fname.value = "";
        lname.value = "";
        email.value = "";
        pass.value = "";
    } 
}
   