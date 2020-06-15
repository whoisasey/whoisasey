// const content = {
//     {
//         name: `jun11`,
//         date: `Thursday, June 11, 2020`,
//         player: `            <iframe width="80%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2FISORadio%2Fkonzai-with-asey-11th-june-2020%2F" frameborder="0" ></iframe>
//         `,
//         tracklist: `https://www.dropbox.com/home/KONZAI%20TRACKLISTS?preview=konzai-6-11.pdf`
//     },
//     {
//         name: `may28`,
//         date: `Thursday, May 28, 2020`,
//         player: `            <iframe width="80%" height="120" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&hide_artwork=1&feed=%2FISORadio%2Fkonzai-with-asey-28th-may-2020%2F" frameborder="0" ></iframe>
//         `,
//         tracklist: `https://www.dropbox.com/s/ha4plogymfhony7/konzai%205-28.pdf?dl=0`
//     },
    

// };


// content.init() => {

//     content.forEach(block => {
//         $('.box').append(`
//         <div class="${block.name}">
//             <p>${block.date}</p>
//             ${block.player}
//             <p><a href="${block.tracklist}"></a></p>
//         `)
//     })
// }

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

// content.init() 
    newFunction();
    
    
    $("select").change(function(){
        $(this).find("option:selected").each(function(){
            const optionValue = $(this).attr("value");
            if(optionValue){
                $(".box").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else{
                $(".box").hide();
            }
        });
    }).change();  
    
})