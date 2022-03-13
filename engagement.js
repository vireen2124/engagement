const timeContainer=document.querySelector(".time-left");
const position=["left","right"];
let buttonClicked=false;
let ballons=0
const generateRandomLocation=(viewPort)=>{
    let a= Math.floor(Math.random()*viewPort);
    if(a>=95){
        a = Math.floor(Math.random()*viewPort);
    }
    return a
}
const randomPosition=()=>{
    const index=Math.floor(Math.random()*position.length);
    return index
}

const generateRandomColor=()=>{
    let color="";
    const color1=Math.floor(Math.random()*255)+1
    const color2=Math.floor(Math.random()*255)+1
    const color3=Math.floor(Math.random()*255)+1
    const color4=Math.floor(Math.random()*255)+1
    const color5=Math.floor(Math.random()*255)+1
    const color6=Math.floor(Math.random()*255)+1
    color=`radial-gradient(circle, rgba(${color1},${color2},${color3},1) 0%, rgba(${color4},${color5},${color6},1) 80%, rgba(${color1},${color2},${color3},1) 100%)`;
    return color
}
const renderBallons=()=>{
    ballons++
    if(ballons<=100){
        for(let i=0;i<1;i++){
            const ballon =document.createElement("div");
            const left=generateRandomLocation(100);
            const top=generateRandomLocation(100);
            const BallonPosition=position[randomPosition()];
            const container=document.querySelector(".ballon-container");
            ballon.animate([
                {top:"-50vh",BallonPosition:`${left}vw`},
                {top:`${top}vh`,BallonPosition:`${left}vw`}
            ],{duration:5000})
            ballon.classList.add("ballon");
            ballon.style.top=`${top}vh`;
            ballon.style[BallonPosition]=`${left}vw`;
            ballon.style.background=generateRandomColor()
            container.appendChild(ballon);     
        }
    }  
}
const timeOut=()=>{
    timeContainer.classList.toggle("ticking")
}
const engagementStarted=()=>{
    timeOut()
    setTimeout(() => {
        const checkClassList=timeContainer.classList.contains("ticking");
        if(checkClassList){
            timeContainer.classList.remove("ticking")
        }
        const ballons=setInterval(renderBallons,500);
        const endingGreeting=document.querySelector(".welcome-attendees");
        const pdf=document.querySelector(".pdf");
        if(buttonClicked===false){
            endingGreeting.classList.add("welcome-attendees-visible");
        }
       
        pdf.style.zIndex="5"
        setTimeout(()=>{
            clearInterval(ballons)
        },10000)
    }, 9000);
}

const countdown=()=>{
    const timeTags=document.querySelectorAll(".time");
    
    const dayTag=timeTags[0]
    const hoursTag=timeTags[1];
    const minutesTag=timeTags[2];
    const secondsTag=timeTags[3];
    const engagementDate=new Date("march 26, 2022 15:00:00").getTime();
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
    stillGotTime=()=>{
        renderTime(days,dayTag);
        renderTime(hours,hoursTag);
        renderTime(minutes,minutesTag);
        renderTime(seconds,secondsTag); 
    }

    if(timeLeft<=0){
        console.log("hi")
        return engagementStarted()
    }
    return stillGotTime()
}

const closeEnding=document.querySelector(".close-ending");
const stopInterval=()=>{
    
    return setInterval(()=>{
        if(buttonClicked===true) return
        countdown()
    },1000)
}

stopInterval()
closeEnding.addEventListener("click",()=>{
    const ballonsContainer=document.querySelector(".ballon-container");
    const endingGreeting=document.querySelector(".welcome-attendees");
    const pdf=document.querySelector(".pdf");
    pdf.style.zIndex="1"
    ballonsContainer.style.display="none";
    endingGreeting.classList.remove("welcome-attendees-visible");
    buttonClicked=true;
    stopInterval();
    return
})













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
