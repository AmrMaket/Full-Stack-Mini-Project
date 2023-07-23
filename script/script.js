let login_btn = document.getElementById("login-btn")


login_btn.addEventListener("click" , () =>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
})


let signinData = new URLSearchParams();
    signinData.append("email", email);
    signinData.append("password", password);

function getUser (){
    fetch("http://localhost/fullStack/php/sign_in.php", {
        method: "POST",
        headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: signinData
    })
    .then((response) => response.json())
    .then(data => {
        if (data.status == "Logged In"){
        localStorage.setItem("username", username)
        window.location.href = "dashboard.html"
        } else {
            message.style.display = "block"
        }
    })
}