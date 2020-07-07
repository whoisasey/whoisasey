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
    console.log(newText);
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

$(document).ready(function(){
  AOS.init();
  newFunction();

  $('.menu').on("click", function () {
    openNav()
    console.log('menu clicked')
  })

  $('.closebtn').on('click', function () {
    closeNav()
  })

  // $("select").change(function () {
  //   $(this).find("option:selected").each(function () {
  //     const optionValue = $(this).attr("value");
  //     if (optionValue) {
  //       $(".box").not("." + optionValue).hide();
  //       $("." + optionValue).show();
  //     } else {
  //       $(".box").hide();
  //     }
  //   });
  // }).change();

})
