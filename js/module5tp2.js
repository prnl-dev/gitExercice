window.onload=function(){
    let firstname = document.getElementById("firstname");
    let repeatPwd = document.getElementById("repeatpwd");
    let pwd = document.getElementById("pwd");
    let rigthColumn = document.getElementById("rightColumn");

    firstname.addEventListener("click",function(){
        alert("entrez votre prénom");
    });
    repeatPwd.addEventListener("blur", function(){
        if (repeatPwd.value!=pwd.value){
            let error = document.createElement("p");
            error.textContent="le mot de passe n'est pas indentique";
            error.style="border: 1px solid red";
            rigthColumn.appendChild(error);
        }
    });
}