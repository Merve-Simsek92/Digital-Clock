function showTime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();

h=h<10 ? "0"+ h : h;
m=m<10 ? "0"+ m : m;
s=s<10 ? "0"+ s : s;


let time=document.querySelector(".clock");
time.innerText=`${h}:${m}:${s}`



setInterval(showTime,1000)
 }
 showTime()
// function showTime(){
//     var date=new Date();
//     var time=date.toLocaleTimeString();
//    let t=document.querySelector(".clock");
//    t.innerText=time;
// }
// setInterval(showTime,1000)
// showTime()