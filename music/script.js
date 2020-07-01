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


// const mixes = {
//     chennessy: {
//         id: 001,
//         name: "Rinse FM with CHENNESSY (UK)",
//         player: `            <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/828187732&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/rinsefm" title="Rinse FM" target="_blank" style="color: #cccccc; text-decoration: none;">Rinse FM</a> · <a href="https://soundcloud.com/rinsefm/chennessy250520" title="God Bless Chennessy with Asey - 25 May 2020" target="_blank" style="color: #cccccc; text-decoration: none;">God Bless Chennessy with Asey - 25 May 2020</a></div>`
//     }
//     esky: {
//         id: 002,
//         name: "Transmission with ESKY (UK)",
//         player: `<iframe width="100% " height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/829019770&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/eskybeat" title="Esk" target="_blank" style="color: #cccccc; text-decoration: none;">Esk</a> · <a href="https://soundcloud.com/eskybeat/04am38" title="Four in the AM #38 w/ Esk &amp; Asey" target="_blank" style="color: #cccccc; text-decoration: none;">Four in the AM #38 w/ Esk &amp; Asey</a></div>`
//     },

// }

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

      $("select").change(function () {
          $(this).find("option:selected").each(function () {
              $('.container').append(`
              
              `)
          }
    
    
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