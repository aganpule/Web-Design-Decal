
$(document).ready(function(){
	
	$("body").css("margin", "0px");

	$("#author").text("--Albus Dumbledore");

	$(".owl").click(function() {
		$(".owl-big").show();
		$(".owl").hide();
		$("#owl-text").hide();
	});

	$(".background-container").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$("#Houses").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$("#navbar").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$("#submit").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$(".image-container").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$("#academic-container").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$("#student-life-container").click(function() {
		$(".owl-big").hide();
		$(".owl").show();
		$("#owl-text").show();
	});

	$('.background-container').unslider({
	    	speed: 500,
	    	delay: 3000,
	});
	
});