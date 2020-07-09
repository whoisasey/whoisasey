const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight = "0";
}

const newFunction = () => {
  const newText = `Coming Soon`;
  $('a.coming-soon').hover(function () {
    $(this).html(newText).toggleClass('coming-soon');
  })
}

// const dropdown = () => {
//   $("select").change(function () {
//     $(this).find("option:selected").each(function () {
//       const optionValue = $(this).attr("value");
//       if (optionValue) {
//         $(".box").not("." + optionValue).hide();
//         $("." + optionValue).show();
//       } else {
//         $(".box").hide();
//       }
//     });
//   }).change();
// }


const init = () => {
  newFunction();

  $('.menu').on("click", function () {
    openNav()
  })

  $('.closebtn').on('click', function () {
    closeNav()
  })

  $("select").change(function () {
    $(this).find("option:selected").each(function () {
      var optionValue = $(this).attr("value");
      if (optionValue) {
        $(".box").not("." + optionValue).hide();
        $("." + optionValue).show();
      } else {
        $(".box").hide();
      }
    });
  }).change();



  $('.top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });


}

$(function(){
  AOS.init();

  init();

  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 100) {
  //     $('.top').fadeIn();
  //   } else {
  //     $('.top').fadeOut();
  //   }
  // });

  

  // $(window).scroll(function () {
  //   let scrolled = $(window).scrollTop();
  //   if (scrolled > 400) $('.top').fadeIn('slow');
  //   if (scrolled < 400) $('.top').fadeOut('slow');
  // });
})
