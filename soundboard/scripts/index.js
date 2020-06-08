//array of objects representing each producer, name, photo and audio that will be displayed on the page
const content = [
    {
        name: `southside`,
        producer: `Southside`,
        audio: './audio/southside.mp3',
        image: './images/southSide.jpeg',
        audioClass: "p1"
    },
    {
        name: "bangladesh",
        producer: `Bangladesh`,
        audio: './audio/bangladesh.mp3',        
        image: './images/bangladesh.jpeg',
        audioClass: "p2"
    },
    {
        name: "charlieHeat",
        producer: `Charlie Heat`,
        audio: './audio/charlieHeat.mp3',
        image: './images/charlieHeat.jpeg',
        audioClass: 'p3',
    },
    {
        name: "metroBoomin",
        producer: `Metro Boomin`,
        audio: './audio/metro.mp3',
        image: './images/metroBoomin.jpeg',
        audioClass: "p9"
    },
    {
        name: "murdaBeatz",
        producer: `Murda Beatz`,
        audio: './audio/murda.mp3',
        image: './images/murdaBeatz.jpeg',
        audioClass: 'p4',
    },
    {
        name: "daytrip",
        producer: `Take A Day Trip`,
        audio: './audio/daytrip.mp3',
        image: './images/daytrip.jpeg',
        audioClass: 'p5',
    },
    {
        name: "drummaBoy",
        producer: `Drumma Boy`,
        audio: './audio/drummaBoy.mp3',
        image: './images/drummaBoy.jpeg',
        audioClass: 'p6',
    },
    {
        name: "mikeWill",
        producer: `Mike WiLL Made It`,
        audio: './audio/mikeWill.mp3',
        image: './images/mikeWill.jpeg',
        audioClass: 'p7',
    },
    {
        name: "djMustard",
        producer: `DJ Mustard`,
        audio: './audio/mustard.mp3',
        image: './images/djMustard.png',
        audioClass: 'p8',
    },
    {
        name: "donCannon",
        producer: `Don Cannon`,
        audio: './audio/cannon.mp3',
        image: './images/donCannon.jpeg',
        audioClass: 'p10',
    },
    {
        name: "justBlaze",
        producer: `Just Blaze`,
        audio: './audio/justBlaze.mp3',
        image: './images/justBlaze.jpeg',
        audioClass: 'p11',
    },
    {
        name: "davidBanner",
        producer: `David Banner`,
        audio: './audio/davidBanner.mp3',
        image: './images/davidBanner.png',
        audioClass: 'p12',
    },
    {
        name: "tayKeith",
        producer: `Tay Keith`,
        audio: './audio/tayKeith.mp3',
        image: './images/tayKeith.jpeg',
        audioClass: 'p13',
    },
    {
        name: "sonnyDigital",
        producer: `Sonny Digital`,
        audio: './audio/sonnyDigital.mp3',
        image: './images/sonnyDigital.jpeg',
        audioClass: 'p14',
    },
    {
        name: "youngChop",
        producer: `Young Chop`,
        audio: './audio/youngChop.mp3',
        image: './images/youngChop.jpeg',
        audioClass: 'p15',
    },
    {
        name: "harryFraud",
        producer: `Harry Fraud`,
        audio: './audio/harryFraud.mp3',
        image: './images/harryFraud.jpeg',
        audioClass: 'p16',
    },
    {
        name: "bobbyJohnson",
        producer: `Bobby Johnson`,
        audio: './audio/bobbyJohnson.mp3',
        image: './images/bobbyJohnson.jpeg',
        audioClass: 'p17',
    },
    {
        name: "darkChild",
        producer: `Dark Child`,
        audio: './audio/darkChild.mp3',
        image: './images/darkChild.jpeg',
        audioClass: 'p18',
    },
    {
        name: "jahlilBeats",
        producer: `Jahlil Beats`,
        audio: './audio/jahlilBeats.mp3',
        image: './images/jahlilBeats.jpg',
        audioClass: 'p19',
    },
    {
        name: "londonOnDaTrack",
        producer: `London On Da Track`,
        audio: './audio/londonOnDaTrack.mp3',
        image: './images/londonOnDaTrack.jpeg',
        audioClass: 'p20',
    },
    {
        name: "maalyRaw",
        producer: `Maaly Raw`,
        audio: './audio/maalyRaw.mp3',
        image: './images/maalyRaw.jpeg',
        audioClass: 'p21',
    },
    {
        name: "nitti",
        producer: `Nitti`,
        audio: './audio/nitti.mp3',
        image: './images/nitti.jpeg',
        audioClass: 'p22',
    },
    {
        name: "pierreBourne",
        producer: `Yo Pierre`,
        audio: './audio/pierreBourne.mp3',
        image: './images/pierreBourne.jpeg',
        audioClass: 'p23',
    },
    {
        name: "quay",
        producer: `Quay Global`,
        audio: './audio/quay.mp3',
        image: './images/quay.jpeg',
        audioClass: 'p24',
    },
    {
        name: "wheezy",
        producer: `Wheezy Outta Here`,
        audio: './audio/wheezy.mp3',
        image: './images/wheezy.jpeg',
        audioClass: 'p25',
    },
    {
        name: "jetson",
        producer: `Jetson`,
        audio: './audio/jetson.mp3',
        image: './images/jetson.jpeg',
        audioClass: 'p26',
    },
    {
        name: "thaBizness",
        producer: `Tha Bizness`,
        audio: './audio/thaBizness.mp3',
        image: './images/thaBizness.jpeg',
        audioClass: 'p27',
    },
    {
        name: "dunDeal",
        producer: `Dun Deal`,
        audio: './audio/dunDeal.mp3',
        image: './images/dunDeal.jpeg',
        audioClass: 'p28',
    },
    {
        name: "djSpinz",
        producer: `DJ Spinz`,
        audio: './audio/cutItUp.mp3',
        image: './images/djSpinz.jpeg',
        audioClass: 'p29',
    },
    {
        name: "zaytoven",
        producer: `Zaytoven`,
        audio: './audio/zaytoven.mp3',
        image: './images/zaytoven.jpeg',
        audioClass: 'p30',
    },
    
];

content.init = () => {
    
    //function that gives random integer
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
    }

    //for each 'block' in the content array, give each block a random "position" between 1 and 9
    content.forEach(block => {
        block.position = getRandomInt(25);
    });

    //sort our array based on random "position" value, and makes sure that no li's are repeated on the page
    content.sort(function(a, b) {
        return a.position - b.position
    });

    // the number of blocks(divs) to show on the page
    content.length = 9;

    //for each item in the array after adjusting for length, append new li with content from our 'content' array
    content.forEach(block => {
        $('.container').append(`
        <li class="gridItem ${block.name}" id="${block.name}" tabindex="0">
            <img src="${block.image}" alt="${block.producer}"/>
            <h2>${block.producer}</h2>  
        </li>
        <audio src="${block.audio}" class="${block.audioClass}" preload="auto" type="audio/mpeg"></audio>

        `);
    });

    //on click or spacebar keypress, play audio
    $('li').on('click keypress', function(e) {
        if (e.which === 32 || e.which === 1) {
        const audio =  $(this).next()[0];
        audio.play();
        }
        //shoutout sherry and asaf for help with this
    });

    //on click of button or spacebar keypress, refresh the selection
    $('.button').on('click keypress', function(e) {
        if (e.which === 32 || e.which === 1) {
            location.reload();
        }
    });

}

$(function() {
    content.init();
    
});