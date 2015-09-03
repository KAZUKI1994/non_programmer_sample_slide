var greet={
	"color": "red",
	"font-size" : "20px"
};

$(function(){
	$(".red").css(greet);

	$("#translucent").fadeTo(0, 0.5).click(function(){
		$('#translucent').css("background", "blue");
	});

});