$(document).ready(function(){

    // tbbt video
    // $('#tbbtVideo').on('hide', function () {
    // console.debug("video hidden",this);
    // var iframev = $(this).find(".modal-body iframe");
    // var src = iframev.attr("src");
    // iframev.attr("src","");
    // iframev.attr("src",src);
    // });

    // console.debug("hi");
    // $(".my-accord").hide();
    // $(".toggle-my-accord").click(function(){
    //     if($("#"+this.href.split("#")[1]+":visible").size()){   
    //         $("#"+this.href.split("#")[1]).slideUp();
    //     }else{
    //         $("#"+this.href.split("#")[1]).slideDown().siblings(".my-accord").slideUp();
    //     }
    //     return false;
    // });

    console.debug("why isn't this working?");

    $('#nav').localScroll();

    // suppose to change out the image on hover
    $('#first-bubble').mouseenter(function(){
    });
    $('#first-bubble').mouseleave(function(){
    });

    $('.icon-chevron-down').each(function() {
    var elem = $(this);
    setInterval(function() {
        if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
        } else {
            elem.css('visibility', 'hidden');
        }    
    }, 500);
});

});