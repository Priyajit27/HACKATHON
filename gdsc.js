let h=document.getElementsByClassName('linkbox')
function click(){
    console.log();
}

function displaytime(){
    time =new Date();
    console.log(time)
    document.getElementById('time').innerHTML=time;
}
setInterval(displaytime,1000)

// addEventListener("on scroll", function())
function myFunction() {
    document.getElementsByClassName("teams").innerHTML = "You scrolled in div.";
  }