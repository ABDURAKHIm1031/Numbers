let RandomNum = [];
let left = document.getElementsByClassName("left")[0];
let win = document.getElementsByClassName("win")[0];
let fail = document.getElementsByClassName("fail")[0];
let inputs = document.querySelectorAll("input")
for(let i = 0; i < 5; i++){
    RandomNum[i] = Math.floor(Math.random() * 1000);
    let p = document.createElement("p");
    p.innerText = RandomNum[i];
    left.appendChild(p)
}
function reload(){
    window.location.reload();
}
function check(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let input5 = document.getElementById("input5").value;
    if (input1 == RandomNum[0] && input2 == RandomNum[1] && input3 == RandomNum[2] && input4 == RandomNum[3] && input5 == RandomNum[4]){
        win.style.display = "block"
        fail.style.display = "none"
    }else{
        fail.style.display = "block"
        win.style.display = "none"
    }
    inputs.forEach(input => {
        input.setAttribute("Disabled",true);
        
    });
}
setTimeout(() => {
    left.style.filter = "blur(10px)"
    inputs.forEach(input => {
        input.removeAttribute("Disabled")
    });
    time();
}, 3000);
function time (){
    setInterval(() => {
        let time = document.querySelector("#time");
        let num = +time.textContent;
        num > 0 && num--;
        time.innerText = num;
        if(num == 0){
            check()
        }
    }, 1000);
}