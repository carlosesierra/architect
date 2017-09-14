jQuery(document).ready(function($) {
 
$(".scroll a").click(function(event){     
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});
});

jQuery(document).ready(function($) {
    $('img[title]').each(function() { $(this).removeAttr('title'); });
});

// video resize
$(function() {
var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed"),
$fluidEl = $("figure");
$allVideos.each(function() {
$(this)
// jQuery .data does not work on object/embed elements
.attr('data-aspectRatio', this.height / this.width)
.removeAttr('height')
.removeAttr('width');
});
$(window).resize(function() {
var newWidth = $fluidEl.width();
$allVideos.each(function() {
var $el = $(this);
$el
    .width(newWidth)
    .height(newWidth * $el.attr('data-aspectRatio'));
});
}).resize();
});

// windows size container
  // global vars
var winHeight = $(window).height();
// set initial div height / width
$('.container').css({
'min-height': winHeight + (- 80),
});
// make sure div stays full width/height on resize
$(window).resize(function(){
    $('.container').css({
    'min-height': winHeight + (- 80),
});
});





