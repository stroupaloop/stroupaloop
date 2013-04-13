$(document).ready(function(){

    // tbbt video
    $('#tbbtVideo').on('hide', function () {
    console.debug("video hidden",this);
    var iframev = $(this).find(".modal-body iframe");
    var src = iframev.attr("src");
    iframev.attr("src","");
    iframev.attr("src",src);
    });

    // var video = $("#playerid").attr("src");
    // $("#playerid").attr("src","");
    // $("#playerid").attr("src",video);

});