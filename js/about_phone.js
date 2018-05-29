$(function(){
    var n=0;
    function run(){
        if(n==5){
            $(".wrap").animate({"left":"0"},1000)
            n=0;
        }else{
            $(".wrap").animate({"left":"-="+1920+"px"},1000)//动画达到目的地的时间
            n++;
        }
        $(".banner .banner_ul li").eq(n).css({"background":"#3A4EB1"}).siblings("li").css({"background":"#CFD4DB"});
    }
    var timer=setInterval(run,3000)//在这停顿的时间
    $(".banner ul li").mouseenter(function () {
        clearInterval(timer);
        var i=$(this).index();
        if(i>n){
            $(".wrap").animate({"left":"-="+((i-n)*1920)+"px"},1000)
            n=i;}else{
            $(".wrap").animate({"left":"-="+((i-n)*1920)+"px"},1000)
            n=i;
        }
        $(".banner ul li").eq(n).css({"background":"red"}).siblings("li").css({"background":"#CFD4DB"});
    }).mouseleave(function () {
        timer=setInterval(run,2000);
    })
})









//点击显示隐藏
// $(document).ready(function(){
//     $(".ml").click(function(){
//         $(".pei_ul li").show().sibling("li").hide();
//     });
//
// });
console.log()
function ace(a){
    var i1 = document.querySelector(".ml_1")
    var i2 = document.querySelector(".ml_2")
    var i3 = document.querySelector(".ml_3")
    if(a==1){
        i2.style.display="none"
        i3.style.display="none"
        i1.style.display="block"
        setTimeout(function(){
            i1.style.opacity="1"

            i2.style.opacity="0"

            i3.style.opacity="0"
        },100)
    }else if(a==2){
        i1.style.display="none"
        i3.style.display="none"
        i2.style.display="block"
        setTimeout(function(){
            i2.style.opacity="1"

            i1.style.opacity="0"

            i3.style.opacity="0"
        },100)
    }else if(a==3){
        i2.style.display="none"
        i1.style.display="none"
        i3.style.display="block"
        setTimeout(function(){
            i3.style.opacity="1"

            i2.style.opacity="0"

            i1.style.opacity="0"
        },100)
    }
}

//youlun轮播

$(function(){
    var n=0;
    function run(){
        if(n==2){
            $(".wrap_you").animate({"left":"0"},1000)
            n=0;
        }else{
            $(".wrap_you").animate({"left":"-="+1220+"px"},1000)//动画达到目的地的时间
            n++;
        }
        $(".youlun .youlun_ul li").eq(n).css({"background":"#3A4EB1"}).siblings("li").css({"background":"#CFD4DB"});
    }
    var timer=setInterval(run,3000)//在这停顿的时间
    $(".youlun ul li").mouseenter(function () {
        clearInterval(timer);
        var i=$(this).index();
        if(i>n){
            $(".wrap_you").animate({"left":"-="+((i-n)*1220)+"px"},1000)
            n=i;}else{
            $(".wrap_you").animate({"left":"-="+((i-n)*1220)+"px"},1000)
            n=i;
        }
        $(".youlun ul li").eq(n).css({"background":"red"}).siblings("li").css({"background":"#CFD4DB"});
    }).mouseleave(function () {
        timer=setInterval(run,2000);
    })
})


//give
function abc(a){
    var g1 = document.querySelector(".gl_1")
    var g2 = document.querySelector(".gl_2")
    var g3 = document.querySelector(".gl_3")
    if(a==1){
        g2.style.display="none"
        g3.style.display="none"
        g1.style.display="block"
        setTimeout(function(){
            g1.style.opacity="1"

            g2.style.opacity="0"

            g3.style.opacity="0"
        },100)
    }else if(a==2){
        g1.style.display="none"
        g3.style.display="none"
        g2.style.display="block"
        setTimeout(function(){
            g2.style.opacity="1"

            g1.style.opacity="0"

            g3.style.opacity="0"
        },100)
    }else if(a==3){
        g2.style.display="none"
        g1.style.display="none"
        g3.style.display="block"
        setTimeout(function(){
            g3.style.opacity="1"

            g2.style.opacity="0"

            g1.style.opacity="0"
        },100)
    }
}

//登陆
$(function (){
    $(".deng").click(function(){
        $(".dialog").css({"display":"block"});
        $(".spice-black-opacity").css({"display":"block"})
    })
})
$(function (){
    $(".icon_c").click(function(){
        $(".dialog").css({"display":"none"});
        $(".spice-black-opacity").css({"display":"none"})
    })
})



//下拉
$(function () {
    $(".nav_left li").hover(function(){
        $(".xiala").stop().slideDown(100);
    },function(){
        $(".xiala").stop().slideUp(100);

    })

})














