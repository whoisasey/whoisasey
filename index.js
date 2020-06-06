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
    $('a.coming-soon').hover(function() {
        $(this).html(newText).toggleClass('coming-soon');
        console.log(newText);
    })
};

$(document).ready(function(){
    newFunction();
})
