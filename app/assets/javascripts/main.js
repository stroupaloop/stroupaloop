$(document).ready(function(){

    console.debug("TRAGDOR!!!");

    // Google API Maps
    var stockholm = new google.maps.LatLng(39.288608,-76.599215);
    var parliament = new google.maps.LatLng(39.288608,-76.599215);
    var marker;
    var map;

    function initialize() {
      var mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: stockholm
      };

      map = new google.maps.Map(document.getElementById('map-canvas'),
              mapOptions);

      marker = new google.maps.Marker({
        map:map,
        draggable:true,
        animation: google.maps.Animation.DROP,
        position: parliament
      });
      google.maps.event.addListener(marker, 'click', toggleBounce);
    }

    function toggleBounce() {

      if (marker.getAnimation() != null) {
        marker.setAnimation(null);
      } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
      }
    }

    google.maps.event.addDomListener(window, 'load', initialize);

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


});