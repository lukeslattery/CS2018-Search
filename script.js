/* 
	LukeStrap - PreDeveloped Web Assets
	Slide Down Menu
	by Luke Slattery 
*/

$(document).ready( function() {
    $('.menu-button').click(function() {
        $('.menu').slideToggle(200);
        $('.menu-icon').toggle();
        $('.close-icon').toggle();
    });
});