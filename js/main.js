//start-navbar
$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
// stop-navbar


 //banner title type for "custom content" page start
 if ($("#word").length) {
  const carouselText = [
      { text: "DESIGNER", color: "#0788ff" },
      { text: "DEVELOPER", color: "#0788ff" },
      // { text: "boosts engagement", color: "#3AAA59" },
      // { text: "scales on demand ", color: "#7E4FDE" }
  ]

  $(document).ready(async function () {
      carousel(carouselText, "#word")
  });

  async function typeSentence(sentence, eleRef, delay = 90) {
      const letters = sentence.split("");
      let i = 0;
      while (i < letters.length) {
          await waitForMs(delay);
          $(eleRef).append(letters[i]);
          i++
      }
      return;
  }

  async function deleteSentence(eleRef) {
      const sentence = $(eleRef).html();
      const letters = sentence.split("");
      let i = 0;
      while (letters.length > 0) {
          await waitForMs(45);
          letters.pop();
          $(eleRef).html(letters.join(""));
      }
  }

  async function carousel(carouselList, eleRef) {
      var i = 0;
      while (true) {
          updateFontColor(eleRef, carouselList[i].color)
          await typeSentence(carouselList[i].text, eleRef);
          await waitForMs(1500);
          await deleteSentence(eleRef);
          await waitForMs(500);
          i++
          if (i >= carouselList.length) { i = 0; }
      }
  }

  function updateFontColor(eleRef, color) {
      $(eleRef).css('color', color);
  }

  function waitForMs(ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
  }
} //banner title type for "custom content" page end


// section-brand
$('.col-brand-box').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// section-brand


// start-counter

var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 4000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

// stop-counter

// start-poject-slider
$('.project-slide').slick({
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// stop-project-slider

// start-testimonial-slider 
$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1
});
// stop-testimonial-slider 