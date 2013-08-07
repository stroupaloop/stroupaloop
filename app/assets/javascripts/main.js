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

    console.debug("TRAGDOR!!!");

    //used for smooth scrolling
    $('.nav').localScroll();

    //initiate sequence.js

    var options = {
        nextButton: true,
        prevButton: true,
        animateStartingFrameIn: true,
        autoPlay: true,
        autoPlayDelay: 3000,
        preloader: true
    };

    var projects = $("#projects").sequence(options).data("sequence");

    // jQuery slide right/left
    jQuery.fn.extend({
      slideRightShow: function() {
        return this.each(function() {
            $(this).show('slide', {direction: 'right'}, 1000);
        });
      },
      slideLeftHide: function() {
        return this.each(function() {
          $(this).hide('slide', {direction: 'left'}, 1000);
        });
      },
      slideRightHide: function() {
        return this.each(function() {
          $(this).hide('slide', {direction: 'right'}, 1000);
        });
      },
      slideLeftShow: function() {
        return this.each(function() {
          $(this).show('slide', {direction: 'left'}, 1000);
        });
      }
    });

    // engineering projects
    $('#dfi').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });
    $('#dfi').click(function(){
        $('#dfi-text').removeClass('hide').slideLeftShow();
    });
    $('#dfi').mouseleave(function(){
        $(this).fadeTo('slow',1);
        $('#dfi-text').fadeOut('slow', function(){
            $(this).addClass("hide").removeAttr('style');
        });
    });

    $('#cali').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });
    $('#cali').click(function(){
        $('#cali-text').removeClass('hide');
    });
    $('#cali').mouseleave(function(){
        $(this).fadeTo('slow',1);
        $('#cali-text').fadeOut('slow', function(){
            $(this).addClass('hide').removeAttr('style');
        });
    });

    $('#efv').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });   
    $('#efv').click(function(){
        $('#efv-text').removeClass('hide');
    });
    $('#efv').mouseleave(function(){
        $(this).fadeTo('slow',1);
        $('#efv-text').fadeOut('slow', function(){
            $(this).addClass('hide').removeAttr('style');
        });
    });

    $('#dbf').mouseenter(function(){
        $(this).fadeTo('fast',0.5);
    });
    $('#dbf').click(function(){
        $('#dbf-text').removeClass('hide');
    });
    $('#dbf').mouseleave(function(){
        $(this).fadeTo('slow',1);
        $('#dbf-text').fadeOut('slow', function(){
            $(this).addClass('hide').removeAttr('style');
        });
    });


    // suppose to change out the image on hover
    $('#first-bubble').mouseenter(function(){
    });
    $('#first-bubble').mouseleave(function(){
    });

    // blinking chevron
    // $('.icon-chevron-down').each(function() {
    // var elem = $(this);
    // setInterval(function() {
    //     if (elem.css('visibility') == 'hidden') {
    //         elem.css('visibility', 'visible');
    //     } else {
    //         elem.css('visibility', 'hidden');
    //     }    
    // }, 500);
    // $('.icon-chevron-down').mouseenter(function(){
    //     $(this).stop(true,true);
    // });

});