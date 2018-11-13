"use strict";

$(document).ready(() => {

    const events = [
        {
            date: 'NOV. 30, 2019',
            venue: 'Traverse City Chamber of Commerce',
            location: 'Traverse City, MI', 
            url: '#'
        },
        {
            date: 'Jan. 16, 2019',
            venue: 'Adrian City Hall',
            location: 'Adrian, MI', 
            url: '#'
        },
        {
            date: 'Feb. 22, 2019',
            venue: 'Ypsilanti Public Library',
            location: 'Ypsilanti, MI', 
            url: '#'
        },
        {
            date: 'Mar. 30, 2019',
            venue: 'WeWork',
            location: 'Detroit, MI', 
            url: '#'
        },
        {
            date: 'Apr. 19, 2019',
            venue: 'Lansing City Market',
            location: 'Lansing, MI', 
            url: '#'
        },
         {
            date: 'May. 18, 2019',
            venue: 'Kent County Chamber of Commerce',
            location: 'Grand Rapids, MI', 
            url: '#'
        }
    ]

    //randomly choose which landing page screen user will see
    let randomNum = Math.floor(Math.random() * 5) + 1  

    //declare elements to be chagned
    const $intro = $(".intro");
    const $logo = $("#logo");
    const $linkA = $('.intro .linkA');
    const $linkB = $('.intro .linkB');
    const $text = $('.intro .col');
    const $img = $('.intro img');
    const $heading = $('.intro h2');

    //establish 
    let backgroundColor;
    let logoColor;
    let color1;
    let color2;
    let textColor;
    let imageSrc;
    let headingText;

    switch (randomNum) {
    case 1:
        backgroundColor = '#4CBC8C';
        logoColor = '#FECE8A';
        color1  = '#FFFFFF';
        textColor = '#21704F';
        imageSrc = 'Triangle.gif';
        headingText = "it's not weird";
        break;

    case 2:
        backgroundColor = '#ED9A99';
        logoColor = '#FFFFFF';
        color1  = '#444545';
        textColor = '#444545';
        imageSrc = 'Unicorn.gif';
        headingText = "it's not a unicorn";
        break

    case 3:
        backgroundColor = '#434343';
        logoColor = '#4CBC8C';
        color1  = '#ffffff';
        textColor = '#ED9A99';
        imageSrc = 'zombie.gif';
        headingText = "it's not scary";
        break
    
    case 4:
        backgroundColor = '#6597BA';
        logoColor = '#BD3F40';
        color1  = '#ffffff';
        textColor = '#155375';
        imageSrc = 'bag.gif';
        headingText = "it's not rude";
        break
    
    case 5:
        backgroundColor = '#FECE8A';
        logoColor = '#155375';
        color1  = '#ffffff';
        textColor = '#BD3F40';
        imageSrc = 'Tube.gif';
        headingText = "it's not confusing";
        break   

    }

    function setIntroDipslay(){
        $intro.css(`background-color`, `${backgroundColor}`);
        $logo.css('color', `${logoColor}`);
        $linkA.css({'color': `${color1}`, 'border-bottom': `2px solid ${color1}`});
        $linkB.css({'color': `${logoColor}`, 'border-bottom': `2px solid ${logoColor}`});
        $text.css('color', `${textColor}`);
        $heading.css('border-bottom', `.75rem solid ${textColor}`);
        $heading.text(`${headingText}`);
        $img.attr('src', `./assets/animations/${imageSrc}`);
    }

    setIntroDipslay();
  

//generate events table
$(function() {
    for(let i=0; i < events.length; i++) {
        let eventRow = `
        <div class="eventRow"> 
            <div class="col-sm-12 col-md-6">
                <div class="row dateVenueWrapper">
                    <p class="date">${events[i].date}</p>
                    <p class="venue">${events[i].venue}</p>
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="row locationLinksWrapper">
                    <p class="location">${events[i].location}</p>
                        <a href=${events[i].url}>Register now</a>
                </div>
            </div>
        </div`;

         $(".workshopEvents").append(eventRow);
    }
});


$(window).bind("scroll", function() { 
    // const $intro = $('.intro').offset().top -40;
    const $about = $('.about').offset().top -40;
    const $workshops = $('.workshops').offset().top - 40;
    const $sponsors = $('.sponsors').offset().top - 40;
    const $logo = $('#logo');
    const $navLinkA = $('header > .linkA');

    // const $navLinkB = $('nav > .linkB');
    
   if ($(this).scrollTop() < $about){ 
        $logo.css("color", `${logoColor}`);
        $navLinkA.css({"color": `${color1}`, "border-bottom": `2px solid ${color1}`});

       
   } else if ($(this).scrollTop() > $about && $(this).scrollTop() < $workshops){ 

        $logo.css("color", "#a5a4a4")
        $navLinkA.css({"color": "#4cbc8c", "border-bottom": "2px solid #4cbc8c"});

   } else if ($(this).scrollTop() > $workshops && $(this).scrollTop() < $sponsors){

        $logo.css("color", "#21704f")
        $navLinkA.css({"color": "white", "border-bottom": "2px solid white"});

   } else if ($(this).scrollTop() > $sponsors){

        $logo.css("color", "#a5a4a4")
        $navLinkA.css({"color": "#4cbc8c", "border-bottom": "2px solid #4cbc8c"});
   }
})


})