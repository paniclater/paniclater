/* Author: Ryan Moore
*/
var dripInterval;
var dripTime = 1000;
var clockwise = true;
var contactVisible = false;

$(document).ready(function() {
	viewFade();
	$(".contact").css("left", "-500px");
	$(".drip").css("top", "-360px");
	sunSet();
	$("#cloud1").bind({mouseenter:dripDrop, mouseleave:dripStop});
	$("#sun").bind({mouseenter:sunMove, mouseleave:sunReturn});
	$(".title").bind({click:handleClick});
	$(".contact").bind({click:handleClick, click:handleClick});
	$("#cloud2").bind({mouseenter: cloudMove, mouseleave: cloudReturn});
	
});

function handleClick() {
	if (contactVisible == false) {
		$(".contact").animate({left : -75}, {queue: false, duration: 1000});
		contactVisible = true;	
	} else {
		$(".contact").animate({left : -500}, {queue: false, duration: 1000});
		contactVisible = false;
	}
}

function viewFade() {
	$(".drip-container").css("visibility", "visible");
	$(".viewFade").css("visibility", "visible");
	$(".viewFade").fadeOut(5000);
}

function sunSet() {
	$("#sun").css("top", "-500px");
	$("#sun").animate({top : 100}, {queue: false, duration: 5000});
	
}

function sunMove() {
	
	sunRotation = Math.floor(Math.random()*25) + 1;
	movementModifier = Math.floor(Math.random()*100) + 1;
	if(clockwise === true){
		$("#sun").animate({rotate:sunRotation, right: 50 - movementModifier}, {duration:1000});
		clockwise = false;
	} else {
		$("#sun").animate({rotate:-sunRotation, right: 50 + movementModifier}, {duration:1000});
		clockwise = true;	
	}
}
function sunReturn() {
	$("#sun").delay(1000).animate({rotate:0, right: 50}, {duration:1000});
	
}

function cloudMove() {
	duck = Math.floor(Math.random()*50) + 1;
	bob = Math.floor(Math.random()*50) + 1;
	$(this).animate({bottom: duck, right: bob}, {duration: 1000});
}
function cloudReturn() {
	$(this).delay(1000).animate({bottom:0, right: 0}, {duration:1000});
}
function dripDrop() {
	$(".drip").css("visibility", "visible");
	$(".drip").each(function(){
		dripDistance = Math.floor(Math.random()*100)+1;
		$(this).animate({top : dripDistance}, {duration : dripTime});
	});
	dripInterval = setInterval(randomDrip, 1000);	
}

function randomDrip() {
		$(".drip").each(function(){
			dripDistance = Math.floor(Math.random()*100)+1;
			$(this).animate({top : dripDistance},{duration: dripTime});
		});
}
function dripStop() {
	clearInterval(dripInterval);
	$(".drip").animate({top : -360}, {duration: dripTime});
}


