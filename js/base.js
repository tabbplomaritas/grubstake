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
        date: 'NOV. 30, 2019',
        venue: 'Traverse City Chamber of Commerce',
        location: 'Traverse City, MI', 
        url: '#'
    },
     {
        date: 'NOV. 30, 2019',
        venue: 'Traverse City Chamber of Commerce',
        location: 'Traverse City, MI', 
        url: '#'
    }
]


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
                    <div>
                        <a href="#">Info</a>
                        <a href=${events[i].url}>Register now</a>
                    </div>
                </div>
            </div>
        </div`;


         $(".workshopEvents").append(eventRow);
    }
});


$(window).bind("scroll", function() { 
    const $intro = $('.intro').offset().top -40;
    const $about = $('.about').offset().top -40;
    const $workshops = $('.workshops').offset().top - 40;
    const $logo = $('#logo');
    const $linkA = $('nav > .linkA');
    const $linkB = $('nav > .linkB');
    let $colorPrimary;
    let $colorSecondary;
    let $colorTertiary;
    

   if ($(this).scrollTop() < $about){ 
        $logo.css("color", "#fece8a");
        $linkA.css({"color": "white", "border-bottom": "2px solid white"});
        $linkB.css({"color": "#fece8a", "border-bottom": "2px solid #fece8a"});
       
   } else if ($(this).scrollTop() > $about && $(this).scrollTop() < $workshops){ 
        $logo.css("color", "#a5a4a4")
        $linkA.css({"color": "#4cbc8c", "border-bottom": "2px solid #4cbc8c"});
        $linkB.css({"color": "#a5a4a4", "border-bottom": "2px solid #a5a4a4"});
        // $('.about').css("padding-top", "15rem");

   } else if ($(this).scrollTop() > $workshops){
       console.log('WORKSHOP');
        $logo.css("color", "#21704f")
        $linkA.css({"color": "white", "border-bottom": "2px solid white"});
        $linkB.css({"color": "#21704f", "border-bottom": "2px solid #21704f"});

   }
})


})