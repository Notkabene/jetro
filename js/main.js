$(function(){

$('.slider-for').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  variableWidth: true
});



$('.header__menu-btn').on('click', function(){
  $('.header__menu ul').slideToggle(),
  $('.header__menu-btn').toggleClass('cross'),
  $('.header__menu-row').toggleClass('cross');
});

});