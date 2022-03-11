// function showTime(){
//     var date=new Date();
//     var h=date.getHours();
//     var m=date.getMinutes();
//     var s=date.getSeconds();
//      var x="AM";
 
// if(h == 0){
//     h = 12;
// }

// if(h > 12){
//     h = h - 12
//     x="PM"}


// h=h<10 ? "0"+ h : h;
// m=m<10 ? "0"+ m : m;
// s=s<10 ? "0"+ s : s;


// let time=document.querySelector(".clock");
// time.innerText=`${h}:${m}:${s}  ${x}`



// setInterval(showTime,1000)
//  }
//  showTime()
function showTime(){
    var date=new Date();
    var time=date.toLocaleTimeString();
   let t=document.querySelector(".clock");
   t.innerText=time;
}
setInterval(showTime,1000)
showTime()