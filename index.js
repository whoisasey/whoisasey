function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

const newFunction = function() {
    const newText = `Coming Soon`;
    $('a.comingSoon').hover(function() {
        $(this).html(newText).toggleClass('comingSoon');
        console.log(newText);
    })
};

$(document).ready(function(){
    newFunction();
})
