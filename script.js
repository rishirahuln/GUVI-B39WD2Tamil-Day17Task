let timer=document.createElement("div");
timer.setAttribute("id","countdown");

document.body.append(timer);

setTimeout(()=>{
    timer.innerHTML="10";
    setTimeout(()=>{
        timer.innerHTML="9";
        setTimeout(()=>{
            timer.innerHTML="8";
            setTimeout(()=>{
                timer.innerHTML="7";
                setTimeout(()=>{
                    timer.innerHTML="6";
                    setTimeout(()=>{
                        timer.innerHTML="5";
                        setTimeout(()=>{
                            timer.innerHTML="4";
                            setTimeout(()=>{
                                timer.innerHTML="3";
                                setTimeout(()=>{
                                    timer.innerHTML="2";
                                    setTimeout(()=>{
                                        timer.innerHTML="1";
                                        setTimeout(()=>{
                                            timer.innerHTML="Happy Independence Day";
                                        },1000);
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);