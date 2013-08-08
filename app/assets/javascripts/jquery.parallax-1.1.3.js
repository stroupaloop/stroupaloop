/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function( $ ){
	var $window = $(window);
	var $firstBG = $('#intro');
	var $secondBG = $('#second');
	var $thirdBG = $('#third');
	var $fourthBG = $('#fourth');
	var $fifthBG = $('#fifth');
	var $sixthBG = $('#sixth');

	var $seventhBG = $('#seventh');
	var $ckmascot = $("#seventh .bg");

	var $eigthBG = $('#eighth');
	var $ninthBG = $('#ninth');
	var $asseenonTV = $("#ninth .bg");
	var $tbbt = $("#ninth .bg .bg-tbbt")

	var $tenthBG = $('#tenth');


	var windowHeight = $window.height();

	// apply the inview class
	$('#intro, #second, #third, #fourth, #fifth, #sixth, #seventh, #eighth, #ninth, #tenth, #eleventh,').bind('inview', function(event, visible){
		if (visible == true) {
			$(this).addClass("inview");
		} else {
			$(this).removeClass("inview");
		}
	});

	//places nav in the center of window
	// function RepositionNav(){
	// 	var windowHeight = $window.height(); //get window height
	// 	var navHeight = $('#nav').height()/2;
	// 	var windowCenter = (windowHeight / 2);
	// 	var newtop = windowCenter - navHeight;
	// 	$('#nav').css({"top": newtop}); //set the navbar position
	// }
	// RepositionNav(); //calls the function

	//function that is called for every pixel the user scrolls. Determines the position of the background
	/*arguments: 
		x = horizontal position of background
		windowHeight = height of the viewport
		pos = position of the scrollbar
		adjuster = adjust the position of the background
		inertia = how fast the background moves in relation to scrolling
	*/
	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia) + "px";
	}

	//function to be called whenever the window is scrolled or resized
	function Move() {
		var pos = $window.scrollTop(); //scrollbar position

		if($firstBG.hasClass("inview")){
			$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 840, 0.4)});
		}
		// //if the second section is in view...
		// if($secondBG.hasClass("inview")){
		// 	//call the newPos function and change the background position
		// 	$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 1250, 0.3)});
		// 	//call the newPos function and change the secnond background position
		// 	//$trainers.css({'backgroundPosition': newPos(50, windowHeight, pos, 1900, 0.6)});
		// }
		
		//if the third section is in view...
		if($thirdBG.hasClass("inview")){
			//call the newPos function and change the background position
			$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 2600, 0.3)});
		}

		// //if the fourth section is in view...
		// if($fourthBG.hasClass("inview")){
		// 	//call the newPos function and change the background position
		// 	$fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 3200, 0.3)});
		// }

		//if the fifth section is in view...
		if($fifthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 4600, 0.3)});
			//$asseenonTV.css({'backgroundPosition': newPos(50, windowHeight, pos, 5150, 0.6)});
		}

		// //if the sixth section is in view...
		// if($sixthBG.hasClass("inview")){
		// 	//call the newPos function and change the background position
		// 	$sixthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 5200, 0.3)});
		// }

		//if the seventh section is in view...
		// if($seventhBG.hasClass("inview")){
		// 	//call the newPos function and change the background position
		// 	// $seventhBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 7200, 0.3)});
		// 	// $ckshield.css({'backgroundPosition': newPos(0, windowHeight, pos, 7200, 0.6)});
		// 	// $ckmascot.css({'backgroundPosition': newPos(50, windowHeight, pos, 7200, 0.6)});
		// 	$seventhBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 7200, 0.3) + ", " + newPos(50, windowHeight, pos, 7200, 0.7) + ", " + newPos(50, windowHeight, pos, 7200, 0.5);
		// }
		// CommonKey section

		if($seventhBG.hasClass("inview")){
			// call the newPos function and change the background position
			$seventhBG.css({'backgroundPosition': newPos(10, windowHeight, pos, 6975, 0.3)});
			$ckmascot.css({'backgroundPosition': newPos(95, windowHeight, pos, 6750, 0.6)});
		
		}
		
		// if the eigth section is in view...
		// if($eigthBG.hasClass("inview")){
		// 	//call the newPos function and change the background position for CSS3 multiple backgrounds
		// 	$eigthBG.css({'backgroundPosition': newPos(0, windowHeight, pos, 200, 0.9) + ", " + newPos(50, windowHeight, pos, 0, 0.7) + ", " + newPos(50, windowHeight, pos, 0, 0.5) + ", " + newPos(50, windowHeight, pos, 700, 0.3)});
		// }

		//if the ninth section is in view...
		if($ninthBG.hasClass("inview")){
			//call the newPos function and change the background position
			$ninthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 7975, 0.3)});
			$asseenonTV.css({'backgroundPosition': newPos(50, windowHeight, pos, 8525, 0.6)});
			$tbbt.css({'backgroundPosition': newPos(97, windowHeight, pos, 8175, 0.4)});
		}
		
		$('#pixels').html(pos); //display the number of pixels scrolled at the bottom of the page
	}


	//deals with users resizing the window
	$window.resize(function () {
		Move(); 
		// RepositionNav();
	});

	//when the user is scrolling
	$window.bind('scroll', function(){
		Move();
	});

	// $.fn.parallax = function(xpos, speedFactor, outerHeight) {
	// 	var $this = $(this);
	// 	var getHeight;
	// 	var firstTop;
	// 	var paddingTop = 0;
		
	// 	//get the starting position of each element to have parallax applied to it		
	// 	$this.each(function(){
	// 	    firstTop = $this.offset().top;
	// 	});

	// 	if (outerHeight) {
	// 		getHeight = function(jqo) {
	// 			return jqo.outerHeight(true);
	// 		};
	// 	} else {
	// 		getHeight = function(jqo) {
	// 			return jqo.height();
	// 		};
	// 	}
			
	// 	// setup defaults if arguments aren't specified
	// 	if (arguments.length < 1 || xpos === null) xpos = "50%";
	// 	if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
	// 	if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
	// 	// function to be called whenever the window is scrolled or resized
	// 	function update(){
	// 		var pos = $window.scrollTop();				

	// 		$this.each(function(){
	// 			var $element = $(this);
	// 			var top = $element.offset().top;
	// 			var height = getHeight($element);

	// 			// Check if totally above or totally below viewport
	// 			if (top + height < pos || top > pos + windowHeight) {
	// 				return;
	// 			}

	// 			$this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
	// 		});
	// 	}		

	// 	$window.bind('scroll', update).resize(update);
	// 	update();
	// };
})(jQuery);
