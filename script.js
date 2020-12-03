const openNav = () => {
  document.getElementById("mySidenav").style.width = "375px";
  document.getElementById("main").style.marginRight = "375px";
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


const init = () => {
  // newFunction();

  // $('.menu').on("click", function () {
  //   openNav()
  // })

  // $('.closebtn').on('click', function () {
  //   closeNav()
  // })

  // $("select").change(function () {
  //   $(this).find("option:selected").each(function () {
  //     var optionValue = $(this).attr("value");
  //     if (optionValue) {
  //       $(".box").not("." + optionValue).hide();
  //       $("." + optionValue).show();
  //     } else {
  //       $(".box").hide();
  //     }
  //   });
  // }).change();


  // $('.top').on('click', function (e) {
  //   e.preventDefault();
  //   $('html, body').animate({ scrollTop: 0 }, 'slow');
  // });

  $('video').mouseover(function(){
    $(this).get(0).play();
}).mouseout(function(){
    $(this).get(0).pause();
})
}

$(function(){
  AOS.init();

  init();

})
