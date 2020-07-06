function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

const newFunction = function() {
    const newText = `Coming Soon`;
    $('a.coming-soon').hover(function() {
        $(this).html(newText).toggleClass('coming-soon');
        console.log(newText);
    })
};

$(document).ready(function(){
  AOS.init();
    newFunction();

    $('.menu').on("click", function() {
    openNav()
    console.log('menu clicked')
    })

})
