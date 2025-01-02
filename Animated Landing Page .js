function page1(){
    var tl=gsap.timeline()
tl.from("nav h1,nav h4,nav button",{
    y:-30,
    opacity:0,delay:1,duration:1,stagger:0.2
})
tl.from(".banner .bannerpart1 h1",{
    x:-300,
    opacity:0,duration:0.6,
})
tl.from(".banner .bannerpart1 p",{
    x:-200,
    opacity:0,duration:0.4,
})
tl.from(".banner .bannerpart1 button",{
    opacity:0,duration:0.2,
})
tl.from(".banner .bannerpart2 img",{
    opacity:0,duration:1,x:200
},"-=0.5")
tl.from(".social-logos img",{
    y:30,
    opacity:0,delay:1,duration:1,stagger:0.2
})
}
page1();
function page2(){

    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".services",
            scroller:"body",start:"top 50%",end:"top -50%",   }
    })
    
    tl2.from(".services .services-text h2",{
        x:-100,duration:0.5,opacity:0,
    })
    tl2.from(".services .services-text p",{
        y:30,duration:0.5,opacity:0,
    
    })
    tl2.from(".services .service-points  .points1",{
        x:-100,duration:0.5,opacity:0,stagger:0.2
    
    },"anim1")
    tl2.from(".services .service-points  .points2",{
        x:100,duration:0.5,opacity:0,stagger:0.2
    
    },"anim1")
}
page2();
function page3(){

    var tl3=gsap.timeline({
        scrollTrigger:{
            trigger:".free-proposal",
            scroller:"body", }
    })
    tl3.from(".free-proposal ",{
        y:300,duration:0.5,opacity:0,
    
    })
    tl3.from(".free-proposal .proposal-text",{
        x:-100,duration:1,opacity:0,
    
    },"anim2")
    tl3.from(".free-proposal .proposal-img",{
        x:100,duration:1,opacity:0,
    
    },"anim2")
}
page3();
function page4(){

    var tl4=gsap.timeline({
        scrollTrigger:{
            trigger:".case-study",
            scroller:"body", }
    })
    tl4.from(".case-study .case-text h2",{
        x:-100,duration:0.5,opacity:0,
    })
    tl4.from(".case-study .case-text p",{
        y:30,duration:0.5,opacity:0,
    
    })
    tl4.from(".case-study .case-box ",{
        x:-100,duration:1,opacity:0,
    
    })
    tl4.from(" .case-study .case-box .box",{
        y:30,duration:1,opacity:0,stagger:1
    
    },"anim2")
}
page4();
