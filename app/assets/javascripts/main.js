$(document).ready(function(){

    // tbbt video
    $('#tbbtVideo').on('hide', function () {
    console.debug("video hidden",this);
    var iframev = $(this).find(".modal-body iframe");
    var src = iframev.attr("src");
    iframev.attr("src","");
    iframev.attr("src",src);
    });

    console.debug("hi");
    $(".my-accord").hide();
    $(".toggle-my-accord").click(function(){
        if($("#"+this.href.split("#")[1]+":visible").size()){   
            $("#"+this.href.split("#")[1]).slideUp();
        }else{
            $("#"+this.href.split("#")[1]).slideDown().siblings(".my-accord").slideUp();
        }
        return false;
    });


    // var video = $("#playerid").attr("src");
    // $("#playerid").attr("src","");
    // $("#playerid").attr("src",video);

});