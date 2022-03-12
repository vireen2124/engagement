const countdown=()=>{
    const timeTags=document.querySelectorAll(".time");
    const dayTag=timeTags[0]
    const hoursTag=timeTags[1];
    const minutesTag=timeTags[2];
    const secondsTag=timeTags[3];
    //engagement date
    const engagementDate=new Date("march 26, 2022 17:00:00").getTime();
    //today date
    const today=new Date().getTime();
    //duration
    const timeLeft=engagementDate-today
    //time to display
    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const renderTime=(time,tag)=>{
        if(time<10){
            tag.textContent=`0${time}`
            return
        }
        return tag.textContent=time 
    }
    renderTime(days,dayTag);
    renderTime(hours,hoursTag);
    renderTime(minutes,minutesTag);
    renderTime(seconds,secondsTag);
}
const popUpBtn=document.querySelector(".close-pop-up")
popUpBtn.addEventListener("click",()=>{
    const popUp=document.querySelector(".onLoad-pop-up");
    popUp.classList.add("pop-up-hide")
})


window.addEventListener("scroll",()=>{
    const currentPageHeight=window.scrollY;
    const goToTop=document.querySelector(".got-to-top");
    if(currentPageHeight>20){
        goToTop.classList.add("go-to-top-active")
    }else{
        goToTop.classList.remove("go-to-top-active")
    }
})
setInterval(() => {
    countdown()
}, 500);
