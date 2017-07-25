$(function() {

	$("li").click(
		function() {
			$(this).parents(".linkDiv").css("backgroundColor", "#FFA763");
		});

	$("li").click(
		function() {
			$(this).html("<a href='#'>Clicked!</a>");
		});

	$("li").hover(
		function() {
			$(this).animate({
				opacity: 0.25
			});
		}, function() {
			$(this).animate({
				opacity: 1
			});
		});
});