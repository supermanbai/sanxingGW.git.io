$(function (){
    $(".show_pig img").mouseenter(function(){
        $(this).stop().animate({"margin-top":"-10px"},500);
        // $(this).stop().css({"box-shadow":"0px 0px 50px 0px rgba(0,0,0,0.5)"},500)
    }).mouseleave(function(){
        $(this).stop().animate({"margin-top":"0px"},500);
        // $(this).stop().css({"box-shadow":"0"},500)
    })
})

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