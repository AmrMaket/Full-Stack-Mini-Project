function log_in () {
    const loginEmail = document.getElementById("loginEmail").value;
    const loginPassword = document.getElementById("login").value;
}

function sign_up(){
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phone = document.getElementById("phone").value;
    const signupEmail = document.getElementById("signupEmail").value;
    const signupPassword = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const receiveEmails = document.getElementById("receiveEmails").checked;
    const agreeTerms = document.getElementById("agreeTerms").checked;
}

pages.base_url = "http://localhost/log_in/";

function getUser (){
    fetch(page.base_url)
    .then((response) => {
        return Response.json;
    })
    .then((posts) => {
        postsArray= posts;
    })
    .catch((error) => console.log(error))
}