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


    // Google Analytics (moved from application.html.erb)
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-40197345-1', 'stroupaloop.com');
      ga('send', 'pageview');


});