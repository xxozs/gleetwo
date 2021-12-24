$(function(){

$('.details-item__num').styler();

$('.details-slide__mini').slick({
  asNavFor: '.details-slide__big',
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  draggable: false
});
$('.details-slide__big').slick({
  asNavFor: '.details-slide__mini',
  draggable: false,
  arrows: false,
  fade: true
});


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  });


  $(".star").rateYo({
    starWidth: "12px",
    starHeigth: "12px",
    ratedFill: "#ffcc00",
    normalFill: "#d6d6d6",
    halfStar: true,
    spacing: "6px",
    readOnly: true
  });
  
  // var mixer = mixitup('.design__content');
  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');

  var config = {
    controls: {
      scope: 'local'
    }
  };

  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

});