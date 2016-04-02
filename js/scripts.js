$("#logo").css('font-size', .75*parseInt($("#logo").parent().height()));
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("#brand").show()
    $("#navbrand").hide()
}
else
{
    $("#brand").hide()
    $("#navbrand").show()
}
var height = $("#square").height();
$('#square').css('height', height);
$('#square').css('width', height);
var height = $("#fill").width();
$('#fill').css('height', height);
$('#fill').css('background-position', 'center center');
$('#fill').css('background-size', 'cover');
$('#fill').css('border-radius', '50%');
console.log('swag')

$("#header").css('height', .75*$("body").height())