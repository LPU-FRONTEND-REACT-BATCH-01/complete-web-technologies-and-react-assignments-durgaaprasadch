let username = prompt("Enter Username");
let email = prompt("Enter Email");
let password = prompt("Enter Password");

summary(username, email, password);

function summary(username, email, password) {
   

    let un = username.toLowerCase().trim();
    console.log("Username:", un);

    
    let em = email.toLowerCase().trim();
    let parts = em.split('@');

    if (parts.length === 2) {
        console.log(" name:", parts[0]);
        console.log(" domain:", parts[1]);
    } else {
        console.log("invalid format");
    }

    if (password.length >= 8 && password.includes('/')&& password.includes('@')) {

        console.log("Password is strong");
    } else {
        console.log("Password is not strong");
    }
}