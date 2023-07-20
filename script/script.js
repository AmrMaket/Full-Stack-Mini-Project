let login_btn = document.getElementById("login-btn")


login_btn.addEventListener("click" , () =>{
    let userName 
})

function getUser (){
    fetch("http://localhost/Full-Stack-Mini-Project/php/sign_in.php")
    .then((response) => {
        return Response.json;
    })
    .then((posts) => {
        postsArray= posts;
    })
    .catch((error) => console.log(error))
}