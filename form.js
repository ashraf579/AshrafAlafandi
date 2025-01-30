const userinput = document.getElementsByName("username")[0];
const password = document.getElementsByName("password")[0];


const error = document.querySelector(".error");

const icon = document.querySelector(".icon");

const worng = document.querySelector(".worng");

const btn = document.getElementById("#submit");

const paragraf = document.querySelector(".p-1");



userinput.onblur = ()=>{

    error.innerHTML=userinput.value == ""?"this filed can't be empty":""
    // if (userinput.value == "") {
    //     error.innerHTML = "this filed can't be empty"
    // }

    // else{
    //     error.innerHTML= ""
    // }
}


icon.onclick= () => {
    if (password.type == "text") {
        password.type= "password"
        icon.innerHTML =`<i class="fa-solid fa-eye-slash"></i>`
    }
    
    else{
        password.type = "text"
        icon.innerHTML =`<i class="fa-solid fa-eye"></i>`
    }
    
}


password.onkeyup = () => {
    let lowercase =/[a-z]/g;
    let uppercase = /[A-Z]/g;
    let number = /[0-9]/g;
    if (password.value.match(lowercase)&&
        password.value.match(uppercase)&&
        password.value.match(number)) {
        
            worng.innerHTML =""
    }

    else{
        worng.innerHTML ="must lower ,upper ,number"
    }
}

paragraf.onclick = () => {
    window.open("forget.html")
    window.close("index.html")
}


userinput.oninput = () => {
    sessionStorage.setItem("user",userinput.value);
}


password.oninput = () => {
    sessionStorage.setItem("pass",password.value);
}

onload = () => {
    userinput.value = sessionStorage.getItem("user");
    password.value = sessionStorage.getItem("pass");
}


btn.onclick = (e) =>{

    let userValue = userinput.value;
    let passValue = password.value;
    localStorage.setItem("user", userValue );
    localStorage.setItem("pass", passValue);
}