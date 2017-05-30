console.log('it works');

$(document).ready(function() {

$("#current-section").hide();
$("#interview-section").hide();
$("#features-section").hide();
$("#projects-section").hide();
$("#talks-section").hide();
$("#films-section").hide();

$("#home-link").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
})

$("#current-link").click(function(){
	$("#current-section").show();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#interviews-link").click(function(){
	$("#current-section").hide();
	$("#interview-section").show();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#features-link").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").show();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#projects-link").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").show();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#talks-link").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").show();
	$("#films-section").hide();
});

$("#films-link").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").show();
});

$("#current-link-1").click(function(){
	$("#current-section").show();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#interviews-link-1").click(function(){
	$("#current-section").hide();
	$("#interview-section").show();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#features-link-1").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").show();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#projects-link-1").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").show();
	$("#talks-section").hide();
	$("#films-section").hide();
});

$("#talks-link-1").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").show();
	$("#films-section").hide();
});

$("#films-link-1").click(function(){
	$("#current-section").hide();
	$("#interview-section").hide();
	$("#features-section").hide();
	$("#projects-section").hide();
	$("#talks-section").hide();
	$("#films-section").show();
});

});

		
